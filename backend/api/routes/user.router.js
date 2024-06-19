const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateOneUser,
  deleteOneUser,
  addAppointment,
} = require("../controllers/user.controller");

// Requerimos los middlewares.
const {
  checkAuth, // Obligamos que sea un usuario autenticado.
  checkAdmin, // Revisamos que el usuario logueado sea un Administrador
  checkDoctor, // Revisamos que el usuario logueado sea un Doctor
} = require("../middelwares");

router.get("/", checkAuth, checkAdmin, getAllUsers); // getAllUsers solo podrá ser ejecutada por un administrador, ya que hemos empleados los middlewares de checkAuth y checkAdmin
router.get("/profile", checkAuth, getOwnProfile); // getOwnProfile requiere que el usuario esté logueado para realizar esta petición, ya que usamos el middleware de checkAuth
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", checkAuth, checkAdmin, createUser);
router.put("/:id", checkAuth, updateOneUser);
router.delete("/:id", checkAuth, checkAdmin, deleteOneUser);
router.post("/addappointment", checkAuth, addAppointment);

module.exports = router;
