const router = require("express").Router(); // Instancia de router de express para definir las rutas

// const userRouter = require("./user.router");
// const appointmentRouter = require("./appointment.router");
// const doctor_dataRouter = require("./doctor_data.router");
const insuranceRouter = require("./insurance.router");
// const patientRouter = require("./patient.router");
// const specializationRouter = require("./specialization.router");
// const authRouter = require("./auth.router");

// Según la siguiente parte del endpoint (/api/user, o /api/insurance, etc.), dirigimos la petición a su router correspondiente
// router.use("/user", userRouter);
// router.use("/appointment", appointmentRouter);
// router.use("/doctor_data", doctor_dataRouter);
router.use("/insurance", insuranceRouter);
// router.use("/patient", patientRouter);
// router.use("/specialization", specializationRouter);
// router.use("/auth", authRouter);

module.exports = router; // Exporto la instancia de este router para poder importarlo en el index.js principal
