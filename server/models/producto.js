const mongoose = require('mongoose'); //se llama al modulo de mongodb

let Schema = mongoose.Schema; //conexion para mongo db

let productoSchema = new Schema({ //se crea el esquema producto que es de tipo Schema
    nombre: { //se crea un objeto nombre de tipo
        type: String, //string 
        required: [true, 'el nombre es requerido'], //se determina que el atributo nombre debe ser obligatorio
        default: 'azucar' //si el usuario no mandara ningun parametro el valor por default seria "azucar"
    },
    precioUni: { //se crea un objeto precioUni de tipo
        type: String, //string
        default: '1' //si el usuario no mandara ningun parametro el valor por default seria "1"
    },
    disponible: { //se crea un objeto disponible de tipo
        type: Boolean, //booleano
        default: true //si el usuario no mandara ningun parametro el valor por default seria "true"

    }
})


module.exports = mongoose.model('Producto', productoSchema); //se exporta el schema producto