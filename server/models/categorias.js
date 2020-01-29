const mongoose = require('mongoose'); //se llama al modulo de mongodb

let Schema = mongoose.Schema; //conexion para mongo db

let categoriaSchema = new Schema({ //se crea el esquema categoria que es de tipo Schema
    nombre: { //se crea un objeto nombre con los atributos
        type: String, //tipo 
        required: [true, 'el nombre es requerido'] //se determina que el atributo tipo debe ser obligatorio
    }
});


module.exports = mongoose.model('Categoria', categoriaSchema); //se exporta el schema categoria