const express = require('express');

const router = express.Router();

const Fiscalia = require('../models/fiscalia');


// --------------------------------------------------------------------------
// Listar fiscalias
router.get('/', async (req, res) => {
    const fiscalias = await Fiscalia.find();
    res.json(fiscalias);
});

// --------------------------------------------------------------------------
// buscar una fiscalia 
router.get('/:id', async (req, res) => {
    const fiscalia = await Fiscalia.findById(req.params.id);
    res.json(fiscalia);
});

// --------------------------------------------------------------------------
// Agregar una fiscalia 
router.post('/', async (req, res) => {
    const { nombre, departamento, municipio, direccion, telefono } = req.body;

    const fiscalia = new Fiscalia({
        nombre,
        departamento,
        municipio,
        direccion,
        telefono
    });

    await fiscalia.save();

    res.json({ status: 'registro almacenado' });
});

// --------------------------------------------------------------------------
// Actualizar fiscalia
router.put('/:id', async (req, res) => {

    const { nombre, departamento, municipio, direccion, telefono } = req.body;

    const fiscaliaUpdated = {
        nombre,
        departamento,
        municipio,
        direccion,
        telefono
    };

    await Fiscalia.findByIdAndUpdate(req.params.id, fiscaliaUpdated, {
        useFindAndModify: false
    });
    res.json({ status: 'registro actualizado' });
});

//----------------------------------------------------------------------------
// Eliminar una fiscalia 
router.delete('/:id', async (req, res) =>{
    await Fiscalia.findByIdAndRemove(req.params.id);
    res.json({ status: 'registro eliminado' });
});

module.exports = router;