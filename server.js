const port = 3000;
const express = require("express");
const app = express();

const views = require("./routes/tareasCrud");
const db = require('./db');

app.use(express.json());
app.use('/', views);

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});