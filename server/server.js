const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config')


//midleword capa intermedia entre el node js y el node js como tal  cada ves q un cliente hace peticiones pasa x aui  transfor l body de la pagina a un json
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json("get Usuario");
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el nombre es necesario"
        });
    } else {
        res.json({
            usuario: body
        });
    }



});

app.put('/usuario/:id', function(req, res) {
    let id = req.param.id
    res.json({
        id
    })

});


app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
});


app.listen(process.env.PORT, () => {
    console.log("escuchando en el puerto", 3000);
});