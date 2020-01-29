const express = require('express'); //se llama al modulo de express
const Producto = require('../models/producto') //se define el objeto al cual se le asignaran los metodos
const app = express(); //se nombra al modulo espres como app paara posteriormente su uso



app.post('/producto', function(req, res) { //se crea el metodo post para el js categorias


    let body = req.body; //se toman todos los parametros pasados en el body
    let producto = new Producto({ //se crea un objeto de tipo producto
        nombre: body.nombre, //se mandan el parametro nombre al nuevo objeto
        precioUni: body.precioUni, //se mandan el parametro precioUni al nuevo objeto
        disponible: body.disponible //se mandan el parametro disponible al nuevo objeto


    });

    producto.save((err, productoDB) => { //se guarda el nuevo objeto dentro de la base de datos
        if (err) {
            return res.status(400).json({ //si existira algun problema se determina el status 400
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            producto: productoDB //se manda a guardar el nuevo objeto categoria creado
        })
    });

});

module.exports = app; //se exporta todo el post