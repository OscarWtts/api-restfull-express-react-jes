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
    const fiscalia = new Fiscalia(req.body);

    await fiscalia.save();
    res.json({ status: 'registro almacenado' });
});

// --------------------------------------------------------------------------
// Actualizar fiscalia
router.put('/:id', async (req, res) => {
    await Fiscalia.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
    res.json({ status: 'registro actualizado' });
});

//----------------------------------------------------------------------------
// Eliminar una fiscalia 
router.delete('/:id', async (req, res) =>{
    await Fiscalia.findByIdAndRemove(req.params.id);
    res.json({ status: 'registro eliminado' });
});

module.exports = router;