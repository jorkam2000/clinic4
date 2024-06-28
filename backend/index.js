require("dotenv").config(); // Dotenv para poder emplear variables de entorno

const express = require("express");
const morgan = require("morgan");
<<<<<<< HEAD
<<<<<<< HEAD
const cors = require('cors');
||||||| ee4fd21

=======
const cors = require("cors");

>>>>>>> 08f84b8758434abf7e0a28946e7d58ed782e99db
||||||| 15e8df7
const cors = require('cors');
=======

const cors = require("cors");

>>>>>>> 794dfa99e0e568f930bbbc51047d0c95cc5af7a9
const { checkDB, syncModels } = require("./database");
const defineRelations = require("./database/relations");

const startDB = async () => {
  // 1. Comprobar conexión
  await checkDB();
  // 2. Importar modelos y definir sus relaciones
  await defineRelations();
  // 3. Sincronizar modelos con la base de datos
  syncModels();
};

const router = require("./api/routes"); // Instancia del router principal, alojado en /api/routes/index.js

const app = express();
app.use(cors());
app.use(express.json()); // Le damos la capacidad a nuestra api de traducir los JSON que reciba en las peticiones a un objeto de javascript
app.use(morgan("dev"));

app.use("/api", router); // Cualquier petición que llegue empezando con '/api' empleará el router principal importado en la línea 14

app.listen(process.env.PORT, () => {
  console.log(`Server started! Listening on port ${process.env.PORT}`);
  startDB(); // Iniciamos la conexión al servidor una vez nuestro servidor esté arrancado y esperando peticiones
});
