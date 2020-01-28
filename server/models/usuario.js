const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-beautiful-unique-validation');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE},no es un rol valido'
}

let Schema = mongoose.Schema; //conexion para mongo db

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'el correo es requerido'],
        unique: true,
        //disctint: true
    },
    password: {
        type: String,
        required: [true, 'el password es requerido']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
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


usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

//plugin agregando una funcionalidad al usuario schema
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' })




module.exports = mongoose.model('Usuario', usuarioSchema);