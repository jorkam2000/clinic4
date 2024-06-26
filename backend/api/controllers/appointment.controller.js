const Appointment = require("../models/appointment.model");

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      where: req.query, // Permitimos filtrar appointments pasando una query desde el cliente. Si no se pasa ninguna query, devolverá todos los appointments
    });

    if (!appointments) {
      res.status(404).json({
        message: "No appointments found",
        result: appointments,
      });
    }

    res.status(200).json({
      message: "All appointments fetched",
      result: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all appointments",
      result: error,
    });
  }
};

module.exports = {
  getAllAppointments,
};
