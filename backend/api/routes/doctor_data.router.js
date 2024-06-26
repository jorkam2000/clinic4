const router = require("express").Router();

const {
  getAllDoctors,
  getOneDoctor,
  createDoctor,
  updateOneDoctor,
  deleteOneDoctor,
  addSpecialization,
  deleteSpecialization,
} = require("../controllers/doctor_data.controller");
const { checkAuth, checkDoctor, checkAdmin } = require("../middelwares");

router.get("/", checkAuth, getAllDoctors);
router.post(
  "/:userId/add/:specializationId",
  checkAuth,
  checkAdmin,
  addSpecialization
);
router.get("/:id", checkAuth, getOneDoctor);
router.post("/", checkAuth, createDoctor);
router.put("/:id", checkAuth, checkDoctor, updateOneDoctor);
router.delete(
  "/:userId/delete/:specializationId",
  checkAuth,
  checkAdmin,
  deleteSpecialization
);
router.delete("/:id", checkAuth, deleteOneDoctor);

module.exports = router;
