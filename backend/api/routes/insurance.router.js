const router = require("express").Router();

const {
  getAllInsurances,
  getOneInsurance,
  createInsurance,
  updateOneInsurance,
  deleteOneInsurance,
} = require("../controllers/insurance.controller");

const { checkAuth, checkAdmin } = require("../middelwares");

router.get("/", checkAuth, getAllInsurances); // getAllInsurances solo podrá ser ejecutada por un administrador, ya que hemos empleados los middlewares de checkAuth y checkAdmin
router.get("/:id", checkAuth, getOneInsurance);
router.post("/", checkAuth, createInsurance);
router.put("/:id", checkAuth, checkAdmin, updateOneInsurance);
router.delete("/:id", checkAuth, checkAdmin, deleteOneInsurance);

module.exports = router;
