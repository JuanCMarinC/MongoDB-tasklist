require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

// Conexión a MongoDB
mongoose
    .connect(MONGO_URI,{
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
        })
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Manejo de eventos de conexión
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', function () {
    console.log('Conexión a MongoDB abierta');
});

module.exports = db;





