const express = require('express'); //se llama al modulo de express
const app = express(); //se nombra al modulo espres como app paara posteriormente su uso
const bodyParser = require('body-parser'); //modulo que permite tomar las variables enviadas por un formulario y renderizarlas.
require('./config/config') //llama al modulo local config.



const mongoose = require('mongoose'); //se hace el llamado al modulo mongodb

app.use(bodyParser.urlencoded({ extended: false })) //midleword capa intermedia entre el node js y el nomgodb ue funciona de manera tal que cada ves q un cliente hace peticiones pasa x aui  transforma el body de la pagina a un json


// parse application/json
app.use(bodyParser.json()) // todo lo que se recoja por medio de peticiones sera transformado en jason


app.use(require('./routes/usuario')) //se define la ruta donde se encuentra los metodos del usuario

app.use(require('./routes/categorias')) //se define la ruta donde se encuentra los metodos de la categoria

app.use(require('./routes/producto')) //se define la ruta donde se encuentra los metodos de los productos



mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => { //conexion con la base de datos cafe, que corre sobre mmongoDB
    if (err) throw err;

    console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
    console.log("escuchando en el puerto", 3000); //define por que puerto la aplicacion empezara a escuchar
});