const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateOneUser,
  deleteOneUser,
  addAppointment,
  confirmAppointment,
  getAllVisits,
} = require("../controllers/user.controller");

// Requerimos los middlewares.
const {
  checkAuth, // Obligamos que sea un usuario autenticado.
  checkAdmin, // Revisamos que el usuario logueado sea un Administrador
  checkDoctor, // Revisamos que el usuario logueado sea un Doctor
} = require("../middelwares");

// Los doctores pueden obtener todas sus visitas
router.get("/visits", checkAuth, checkDoctor, getAllVisits);
// getAllUsers solo podrá ser ejecutada por un administrador, ya que hemos empleados los middlewares de checkAuth y checkAdmin
router.get("/", checkAuth, checkAdmin, getAllUsers);
// getOwnProfile requiere que el usuario esté logueado para realizar esta petición, ya que usamos el middleware de checkAuth
router.get("/profile", checkAuth, getOwnProfile);
// Los administradores podrán consultar cualquier perfil
router.get("/:id", checkAuth, checkAdmin, getOneUser);
// Los administradores pueden crear usuarios
router.post("/", checkAuth, checkAdmin, createUser);
// Los usuarios con rol de doctor pueden confirmar sus citas
router.put("/confirm", checkAuth, checkDoctor, confirmAppointment);
// Los usuarios pueden modificar sus datos o un admin puede modificar los datos de cualquier usuario
router.put("/:id", checkAuth, updateOneUser);
// Los administradores pueden eliminar usuarios
router.delete("/:id", checkAuth, checkAdmin, deleteOneUser);
// Los usuarios pueden añadir citas que deben ser confirmadas posteriormente por el doctor
router.post("/addappointment", checkAuth, addAppointment);

module.exports = router;
