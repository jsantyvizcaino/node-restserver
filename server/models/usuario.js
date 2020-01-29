const mongoose = require('mongoose'); //se llama al modulo de mongodb
const uniqueValidator = require('mongoose-beautiful-unique-validation'); //se llama al modulo mongoose-beautiful-unique-validation el cual permite validar los campos

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'], //se determina los roles que tendra el schema usuario
    message: '{VALUE},no es un rol valido' // mensaje que aparecera en caso que se introduzca un rol no permitido
}

let Schema = mongoose.Schema; //conexion para mongo db

let usuarioSchema = new Schema({ //se crea el esquema usuario que es de tipo Schema
    nombre: { //se crea un objeto nombre de tipo
        type: String, //string
        required: [true, 'el nombre es requerido'] //el cual es requerido
    },
    email: { //se crea un objeto email de tipo
        type: String,
        required: [true, 'el correo es requerido'],
        unique: true,
        //disctint: true
    },
    password: { //se crea un objeto password de tipo
        type: String,
        required: [true, 'el password es requerido']
    },
    img: { //se crea un objeto img de tipo
        type: String,
        required: false
    },
    role: { //se crea un objeto role de tipo
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
            // required: false

    },
    estado: { //se crea un objeto estado de tipo
        type: Boolean,
        default: true,
        //     required: false

    },
    google: { //se crea un objeto google de tipo
        type: Boolean,
        default: false
            //required: false

    }

});


usuarioSchema.methods.toJSON = function() { //funcion que permite mantener un cierto grado de seguridad
    let user = this;
    let userObject = user.toObject(); //se toma el objeto que regresa la peticion
    delete userObject.password; //se borra el campo password
    return userObject; //se retorna el objeto sin el campo password
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' }) //plugin agregando una funcionalidad al usuario schema





module.exports = mongoose.model('Usuario', usuarioSchema); //se exporta el schema usuario