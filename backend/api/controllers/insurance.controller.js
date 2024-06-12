const Insurance = require("../models/insurance.model");

const getAllInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.findAll({
      where: req.query, // Permitimos filtrar usuarios pasando una query desde el cliente. Si no se pasa ninguna query, devolverá a todos los usuarios
    });

    if (!insurances) {
      res.status(404).json({
        message: "No insurances found",
        result: insurances,
      });
    }

    res.status(200).json({
      message: "All insurances fetched",
      result: insurances,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all insurances",
      result: error,
    });
  }
};

const getOneInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.findByPk(req.params.id);

    if (!insurance) {
      res.status(404).json({
        message: "No insurance found",
        result: insurance,
      });
    }

    res.status(200).json({
      message: "Insurance fetched",
      result: insurance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one insurance",
      result: error,
    });
  }
};

const createInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.create(req.body);

    res.status(201).json({
      message: "Insurance created",
      result: insurance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating insurance",
      result: error,
    });
  }
};

const updateOneInsurance = async (req, res) => {
  try {
    const response = await Insurance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
    if (response === 0) {
      res.status(404).json({
        message: "No insurance found",
        result: response,
      });
    }

    res.status(200).json({
      message: "Insurance updated",
      result: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating insurance",
      result: error,
    });
  }
};

const deleteOneInsurance = async (req, res) => {
  try {
    const insurance = await Insurance.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!insurance) {
      res.status(404).json({
        message: "No insurance found",
        result: insurance,
      });
    }

    res.status(200).json({
      message: "Insurance deleted",
      result: insurance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one insurance",
      result: error,
    });
  }
};

module.exports = {
  getAllInsurances,
  getOneInsurance,
  createInsurance,
  updateOneInsurance,
  deleteOneInsurance,
};
