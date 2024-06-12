const router = require("express").Router(); // Instancia de router de express para definir las rutas

const userRouter = require("./user.router");
const insuranceRouter = require("./insurance.router");

router.use("/user", userRouter);
router.use("/insurance", insuranceRouter);

module.exports = router; // Exporto la instancia de este router para poder importarlo en el index.js principal
