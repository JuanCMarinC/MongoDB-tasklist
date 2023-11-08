const express = require("express");
const app = express();
const db = require("./db"); // Importa la conexión a la base de datos
const tareasRouter = require("./routes/tareasCrud"); // Importa las rutas de tareas

app.use(express.json());

app.use("/tareas", tareasRouter); // Monta las rutas de tareas

app.listen(3000, () => {
    console.log("Servidor en funcionamiento en http://localhost:3000");
});

module.exports = app;
