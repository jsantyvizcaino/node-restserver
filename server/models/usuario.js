const mongoose = require('mongoose');

let Schema = mongoose.Schema; //conexion para mongo db

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: ['true', 'el nombre es requerido']
    },
    email: {
        type: String,
        required: ['true', 'el correo es requerido']
    },
    password: {
        type: String,
        required: ['true', 'el password es requerido']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE",
        // required: false

    },
    estado: {
        type: Boolean,
        default: true,
        //     required: false

    },
    google: {
        type: Boolean,
        default: false
            //required: false

    }

});




module.exports = mongoose.model('Usuario', usuarioSchema);