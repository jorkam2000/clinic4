const Doctor = require("../models/doctor_data.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.findAll({ where: { role: "doctor" } });

    if (!doctors) {
      res.status(404).json({
        message: "No doctors found",
        result: null,
      });
    }

    res.status(200).json({
      message: "All doctors fetched",
      result: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all doctors",
      result: error,
    });
  }
};

const getOneDoctor = async (req, res) => {
  try {
    // const doctor = await User.findByPk(req.params.id, {
    //   where: { role: "doctor" },
    //   // include: {
    //   //   model: Patient, // EAGER LOADING. Devolvemos la info del usuario incluyendo en el mismo objeto la información del paciente que tenga relacionada
    //   // },
    // });

    const doctor = await User.findOne({
      where: { id: req.params.id, role: "doctor" },
    });

    if (doctor === null) {
      res.status(404).json({
        message: "No doctor found",
        result: null,
      });
    } else {
      res.status(200).json({
        message: "Doctor fetched",
        result: doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one doctor",
      result: error,
    });
  }
};

const createDoctor = async (req, res) => {
  try {
    //Debemos encriptar la contraseña, igual que en el signup
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS));
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    req.body.role = "doctor";

    const doctor = await User.create(req.body);

    res.status(201).json({
      message: "Doctor created",
      result: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating doctor",
      result: error,
    });
  }
};

const updateOneDoctor = async (req, res) => {
  try {
    const response = await User.update(req.body, {
      where: {
        id: req.params.id,
        role: "doctor",
      },
    });

    // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
    if (response === 0) {
      res.status(404).json({
        message: "No doctor found",
        result: response,
      });
    }

    res.status(200).json({
      message: "Doctor updated",
      result: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating doctor",
      result: error,
    });
  }
};

const deleteOneDoctor = async (req, res) => {
  try {
    const doctor = await User.destroy({
      where: {
        id: req.params.id,
        role: "doctor",
      },
    });

    if (!doctor) {
      res.status(404).json({
        message: "No doctor found",
        result: null,
      });
    } else {
      res.status(200).json({
        message: "Doctor deleted",
        result: doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one doctor",
      result: error,
    });
  }
};

const addSpecialization = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.params);

    res.status(201).json({
      message: "Specialization added",
      result: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding specialization",
      result: error,
    });
  }
};

const deleteSpecialization = async (req, res) => {
  try {
    const doctor = await Doctor.destroy({
      where: {
        userId: req.params.userId,
        specializationId: req.params.specializationId,
      },
    });

    if (!doctor) {
      res.status(404).json({
        message: "No doctor found",
        result: null,
      });
    } else {
      res.status(200).json({
        message: "Doctor deleted",
        result: doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one doctor",
      result: error,
    });
  }
};

module.exports = {
  getAllDoctors,
  getOneDoctor,
  createDoctor,
  updateOneDoctor,
  deleteOneDoctor,
  addSpecialization,
  deleteSpecialization,
};
