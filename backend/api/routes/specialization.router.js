const router = require("express").Router();

const {
  getAllSpecializations,
  getOneSpecialization,
  createSpecialization,
  updateOneSpecialization,
  deleteOneSpecialization,
} = require("../controllers/specialization.controller");

const { checkAuth, checkAdmin } = require("../middelwares");

router.get("/", checkAuth, getAllSpecializations);
router.get("/:id", checkAuth, getOneSpecialization);
router.post("/", checkAuth, checkAdmin, createSpecialization);
router.put("/:id", checkAuth, checkAdmin, updateOneSpecialization);
router.delete("/:id", checkAuth, checkAdmin, deleteOneSpecialization);

module.exports = router;
