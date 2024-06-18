const router = require("express").Router();

const { getAllAppointments } = require("../controllers/appointment.controller");

router.get("/", getAllAppointments);

module.exports = router;
