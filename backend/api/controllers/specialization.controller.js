const Specialization = require("../models/specialization.model");

const getAllSpecializations = async (req, res) => {
  try {
    const specializations = await Specialization.findAll({
      // Permitimos filtrar usuarios pasando una query desde el cliente. Si no se pasa ninguna query, devolverá a todos los usuarios
      where: req.query,
    });

    if (!specializations) {
      res.status(404).json({
        message: "No specializations found",
        result: null,
      });
    }

    res.status(200).json({
      message: "All specializations fetched",
      result: specializations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all specializations",
      result: error,
    });
  }
};

const getOneSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findByPk(req.params.id);

    if (!specialization) {
      res.status(404).json({
        message: "No specialization found",
        result: null,
      });
    }

    res.status(200).json({
      message: "Specialization fetched",
      result: specialization,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one specialization",
      result: error,
    });
  }
};

const createSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.create(req.body);

    res.status(201).json({
      message: "Specialization created",
      result: specialization,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating specialization",
      result: error,
    });
  }
};

const updateOneSpecialization = async (req, res) => {
  try {
    const response = await Specialization.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
    if (response === 0) {
      res.status(404).json({
        message: "No specialization found",
        result: response,
      });
    }

    res.status(200).json({
      message: "Specialization updated",
      result: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating specialization",
      result: error,
    });
  }
};

const deleteOneSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!specialization) {
      res.status(404).json({
        message: "No specialization found",
        result: null,
      });
    }

    res.status(200).json({
      message: "Specialization deleted",
      result: specialization,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one specialization",
      result: error,
    });
  }
};

module.exports = {
  getAllSpecializations,
  getOneSpecialization,
  createSpecialization,
  updateOneSpecialization,
  deleteOneSpecialization,
};
