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

router.get("/", getAllDoctors);
router.post("/:userId/add/:specializationId", addSpecialization);
router.get("/:id", getOneDoctor);
router.post("/", createDoctor);
router.put("/:id", updateOneDoctor);
router.delete("/:userId/delete/:specializationId", deleteSpecialization);
router.delete("/:id", deleteOneDoctor);

module.exports = router;
