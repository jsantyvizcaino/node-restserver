const express = require('express');
const Categoria = require('../models/categorias')
const app = express();


app.post('/categorias', function(req, res) {

    let body = req.body;
    let categoria = new Categoria({
        nombre: body.nombre,

    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        })
    });

});

module.exports = app;