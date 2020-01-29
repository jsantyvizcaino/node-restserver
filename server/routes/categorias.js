const express = require('express'); //se llama al modulo de express
const Categoria = require('../models/categorias') //se define el objeto al cual se le asignaran los metodos
const app = express(); //se nombra al modulo espres como app paara posteriormente su uso


app.post('/categorias', function(req, res) { //se crea el metodo post para el js categorias

    let body = req.body; //se toman todos los parametros pasados en el body
    let categoria = new Categoria({ //se crea un objeto de tipo categoria
        nombre: body.nombre, //se le manda al nuevo objeto de tipo categoria el nombre que se le pasa atraves del body

    });

    categoria.save((err, categoriaDB) => { //se guarda el nuevo objeto dentro de la base de datos
        if (err) {
            return res.status(400).json({ //si existira algun problema se determina el status 400
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB //se manda a guardar el nuevo objeto categoria creado
        })
    });

});

module.exports = app; //se exporta todo el post