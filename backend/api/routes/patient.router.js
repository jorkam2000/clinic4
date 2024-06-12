const router = require("express").Router();

const {
  getOnePatient,
  createPatient,
  updateOnePatient,
} = require("../controllers/patient.controller");

// // Requerimos los middlewares que hemos creado para poder utilizarlo en rutas específicas
// const {
//   checkAuth, // Middleware para comprobar autenticación. Obligamos al usuario a estar autenticado si empleamos este middleware, y lo aprovechamos para obtener la información del perfil de dicho usuario.
//   checkAdmin, // Middleware para proteger determinadas rutas, y que solo puedan ser ejecutadas por un usuario administrador
// } = require("../middelwares");

router.get("/:userId", getOnePatient);
router.post("/", createPatient);
router.put("/:id", updateOnePatient);

module.exports = router;
