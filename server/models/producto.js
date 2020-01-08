const mongoose = require('mongoose');

let Schema = mongoose.Schema; //conexion para mongo db

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es requerido'],
        default: 'azucar'
    },
    precioUni: {
        type: String,
        default: '1'
    },
    disponible: {
        type: Boolean,
        default: true

    }
})


module.exports = mongoose.model('Producto', productoSchema);