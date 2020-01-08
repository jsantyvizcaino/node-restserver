const mongoose = require('mongoose');

let Schema = mongoose.Schema; //conexion para mongo db

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es requerido']
    }
});


module.exports = mongoose.model('Categoria', categoriaSchema);