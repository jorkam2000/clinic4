const router = require("express").Router();

const {
  getOnePatient,
  createPatient,
  updateOnePatient,
} = require("../controllers/patient.controller");

router.get("/:userId", getOnePatient);
router.post("/", createPatient);
router.put("/:userId", updateOnePatient);

module.exports = router;
