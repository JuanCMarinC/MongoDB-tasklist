const mongoose = require('mongoose');

// Define el esquema
const tareaSchema = new mongoose.Schema({  
descripcion: String,
estado: Boolean,
fechaCre: String,
fechaTer: String,
prioridad: Number,
  // Otros campos de usuario
});

// Crea el modelo
const TareaModel = mongoose.model('tareas', tareaSchema);
module.exports = TareaModel;