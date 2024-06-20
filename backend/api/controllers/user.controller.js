const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const Patient = require("../models/patient.model");
const Appointment = require("../models/appointment.model");
const Insurance = require("../models/insurance.model");

const bcrypt = require("bcrypt");
const DoctorData = require("../models/doctor_data.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      // Permitimos filtrar usuarios pasando una query desde el cliente. Si no se pasa ninguna query, devolverá a todos los usuarios
      where: req.query,
      include: {
        model: Patient,
      },
    });

    if (!users) {
      res.status(404).json({
        message: "No users found",
        result: users,
      });
    }

    res.status(200).json({
      message: "All Users fetched",
      result: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all users",
      result: error,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: Patient, // EAGER LOADING. Devolvemos la info del usuario incluyendo en el mismo objeto la información del paciente que tenga relacionada
      },
    });

    if (!user) {
      res.status(404).json({
        message: "No user found",
        result: user,
      });
    } else {
      res.status(200).json({
        message: "User fetched",
        result: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

const getIdFromToken = async (req) => {
  try {
    let response = null;

    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      async (err, result) => {
        if (err) {
          return res.status(401).send("Token not valid");
        } else {
          response = result.id;
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

const getRoleFromToken = async (req) => {
  try {
    let response = null;

    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      async (err, result) => {
        if (err) {
          return res.status(401).send("Token not valid");
        } else {
          response = result.role;
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

const getOwnProfile = async (req, res) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).send("Token not found");

    const userID = await getIdFromToken(req);

    if (userID != null) {
      const user = await User.findByPk(userID, {
        include: { all: true, nested: true },
      });

      // const patient = await user.getPatient();
      // const insurance = await patient.getInsurance();

      if (!user)
        res.status(404).json({
          message: "No user found",
          result: user,
        });

      // res.locals.user = user;
      res.status(200).json({
        message: "User fetched",
        result: user,
        // result: { user, patient, insurance },
      });
    } else {
      res.status(500).json({
        message: "userId not valid",
        result: error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

// Función de creación de usuario que emplearía un administrador
const createUser = async (req, res) => {
  try {
    //Debemos encriptar la contraseña, igual que en el signup
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS));
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const user = await User.create(req.body);
    const role = req.body.role ?? "user";

    if (role == "user") {
      const patient = await Patient.create(req.body);
      await user.setPatient(patient);
    }

    res.status(201).json({
      message: "User created",
      result: user,
    });
  } catch (error) {
    // SequelizeUniqueConstraintError
    console.log(error);
    res.status(500).json({
      message: "Error creating user",
      result: error,
    });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const userID = await getIdFromToken(req);
    const role = await getRoleFromToken(req);

    if (role == "admin" || userID == req.params.id) {
      // El usuario logueado es un usuario administrador o es el propio usuario quien solicita la actualización
      const response = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
      if (response === 0) {
        res.status(404).json({
          message: "No user found",
          result: response,
        });
      }

      res.status(200).json({
        message: "User updated",
        result: req.body,
      });
    } else {
      res.status(500).json({
        message: "User cannot update other user",
        result: null,
      });
    }
  } catch (error) {
    console.log(error.name);
    if (error.name == "SequelizeUniqueConstraintError") {
      res.status(500).json({
        message: "Error de clave duplicada, usuario no actualizado",
        result: null,
      });
    } else {
      console.log(error);
      res.status(500).json({
        message: "Error updating user",
        result: error,
      });
    }
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      res.status(404).json({
        message: "No user found",
        result: user,
      });
    }

    res.status(200).json({
      message: "User deleted",
      result: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

const addAppointment = async (req, res) => {
  try {
    // Aquí tengo que localizar el usuario que está logueado para vincular la cita con él.
    // Hay que utilizar los métodos autogenerados que propone Sequelize

    if (!req.headers.authorization)
      return res.status(401).send("Token not found");

    const userID = await getIdFromToken(req);

    if (userID != null) {
      const user = await User.findByPk(userID);

      if (!user) {
        res.status(404).json({ message: "No user found", result: null });
      } else {
        const patient = await Patient.findOne({
          where: { userId: user.id },
        });

        if (!patient) {
          res.status(404).json({ message: "No patient found", result: user });
        } else {
          console.log(req.body.doctorId);
          console.log(req.body.specializationId);

          const doctorData = await DoctorData.findOne({
            where: {
              userId: req.body.doctorId,
              specializationId: req.body.specializationId,
            },
          });

          if (doctorData != null) {
            req.body.patientId = patient.id;
            req.body.doctorDatumId = doctorData.id;

            const appointment = await Appointment.create(req.body);

            patient.addAppointment(appointment);

            res.status(201).json({
              message: "Appointment created",
              result: appointment,
            });
          } else {
            res.status(500).json({
              message: "Error creating Appointment, no specialization found",
              result: null,
            });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating Appointment",
      result: error,
    });
  }
};

const confirmAppointment = async (req, res) => {
  try {
    console.log(req.body.appointmentId);
    const response = await Appointment.update(
      { confirmed: 1 },
      {
        where: {
          id: req.body.appointmentId,
        },
      }
    );

    // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
    if (response === 0) {
      res.status(404).json({
        message: "No appointment updated",
        result: response,
      });
    }

    res.status(200).json({
      message: "Appointment confirmed",
      result: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating user",
      result: error,
    });
  }
};

const getAllVisits = async (req, res) => {
  try {
    const doctorId = await getIdFromToken(req);
    console.log(doctorId);

    const visits = await DoctorData.findAll({
      where: { userId: doctorId },
      include: { all: true, nested: true },
    });

    console.log(visits);

    if (!visits) {
      res.status(404).json({
        message: "No visits found",
        result: null,
      });
    } else {
      res.status(200).json({
        message: "All visits fetched",
        result: visits,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all users",
      result: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateOneUser,
  deleteOneUser,
  addAppointment,
  confirmAppointment,
  getAllVisits,
};
