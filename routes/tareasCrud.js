const express = require("express");
const router = express.Router();
const TareaModel = require("../modelos/tareaModel");

// Ruta para crear una nueva tarea (POST)
router.post("/", async (req, res) => {
    try {
        const { descripcion, estado, fechaCre, fechaTer, prioridad } = req.body;
        const nuevaTarea = new TareaModel({ descripcion, estado, fechaCre, fechaTer, prioridad });
        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la tarea" });
    }
});

// Ruta para obtener todas las tareas (GET)
router.get("/", async (req, res) => {
    try {
        const tareas = await TareaModel.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
});

// Ruta para obtener una tarea por ID (GET)
router.get("/:id", async (req, res) => {
    try {
        const tarea = await TareaModel.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({ error: "Tarea no encontrada" });
        } else {
            res.json(tarea);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
});

// Ruta para actualizar una tarea por ID (PUT)
router.put("/:id", async (req, res) => {
    try {
        const { descripcion, estado, fechaCre, fechaTer, prioridad } = req.body;
        const tareaActualizada = await TareaModel.findByIdAndUpdate(
            req.params.id,
            { descripcion, estado, fechaCre, fechaTer, prioridad },
            { new: true }
        );
        if (!tareaActualizada) {
            res.status(404).json({ error: "Tarea no encontrada" });
        } else {
            res.json(tareaActualizada);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
});

// Ruta para eliminar una tarea por ID (DELETE)
router.delete("/:id", async (req, res) => {
    try {
        const tareaEliminada = await TareaModel.findByIdAndDelete(req.params.id);
        if (!tareaEliminada) {
            res.status(404).json({ error: "Tarea no encontrada" });
        } else {
            res.json({ message: "Tarea eliminada con éxito" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
});

module.exports = router;
