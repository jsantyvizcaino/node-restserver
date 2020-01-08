const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config')



const mongoose = require('mongoose');

//midleword capa intermedia entre el node js y el node js como tal  cada ves q un cliente hace peticiones pasa x aui  transfor l body de la pagina a un json
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/usuario'))

app.use(require('./routes/categorias'))

app.use(require('./routes/producto'))



mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;

    console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
    console.log("escuchando en el puerto", 3000);
});