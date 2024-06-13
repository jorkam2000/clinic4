const Patient = require("../models/patient.model");
const Insurance = require("../models/insurance.model");

const getOnePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { userId: req.params.userId },
      include: {
        model: Insurance, // EAGER LOADING. Devolvemos la info del usuario incluyendo en el mismo objeto la información del paciente que tenga relacionada
      },
    });

    if (patient === null) {
      res.status(404).json({
        message: "No patient found",
        result: null,
      });
    } else {
      res.status(200).json({
        message: "Patient fetched",
        result: patient,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one patient",
      result: error,
    });
  }
};

// Función de creación de usuario que emplearía un administrador
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      message: "Patient created",
      result: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating patient",
      result: error,
    });
  }
};

const updateOnePatient = async (req, res) => {
  try {
    console.log(req.params);
    const response = await Patient.update(req.body, {
      where: {
        userId: req.params.userId,
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
      message: "Patient updated",
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

module.exports = {
  getOnePatient,
  createPatient,
  updateOnePatient,
};
