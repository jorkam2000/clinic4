const router = require("express").Router();

const {
  getAllInsurances,
  getOneInsurance,
  createInsurance,
  updateOneInsurance,
  deleteOneInsurance,
} = require("../controllers/insurance.controller");

router.get("/", getAllInsurances); // getAllInsurances solo podrá ser ejecutada por un administrador, ya que hemos empleados los middlewares de checkAuth y checkAdmin
router.get("/:id", getOneInsurance);
router.post("/", createInsurance);
router.put("/:id", updateOneInsurance);
router.delete("/:id", deleteOneInsurance);

module.exports = router;
