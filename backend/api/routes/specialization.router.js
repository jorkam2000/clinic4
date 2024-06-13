const router = require("express").Router();

const {
  getAllSpecializations,
  getOneSpecialization,
  createSpecialization,
  updateOneSpecialization,
  deleteOneSpecialization,
} = require("../controllers/specialization.controller");

router.get("/", getAllSpecializations);
router.get("/:id", getOneSpecialization);
router.post("/", createSpecialization);
router.put("/:id", updateOneSpecialization);
router.delete("/:id", deleteOneSpecialization);

module.exports = router;
