const mongoose = require('mongoose');
const { Schema } = mongoose;

const FiscaliaSchema = new Schema({
    nombre: { type: String, required: true },
    departamento: { type: String, required: true },
    municipio: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }
});

module.exports = mongoose.model('Fiscalia', FiscaliaSchema); 