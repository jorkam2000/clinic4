const router = require("express").Router(); // Instancia de router de express para definir las rutas

const userRouter = require("./user.router");
const insuranceRouter = require("./insurance.router");
const patientRouter = require("./patient.router");
const specializationRouter = require("./specialization.router");
const doctorRouter = require("./doctor_data.router");
const appointmentRouter = require("./appointment.router");

const authRouter = require("./auth.router");

router.use("/user", userRouter);
router.use("/insurance", insuranceRouter);
router.use("/patient", patientRouter);
router.use("/specialization", specializationRouter);
router.use("/doctor", doctorRouter);
router.use("/appointment", appointmentRouter);

router.use("/auth", authRouter);

module.exports = router; // Exporto la instancia de este router para poder importarlo en el index.js principal
