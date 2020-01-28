const express = require('express');
const Usuario = require('../models/usuario')
const app = express();
const bcript = require('bcryptjs');
const _ = require('underscore')




app.get('/usuario', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);
    // Usuario.find({ google: true })
    Usuario.find({}), 'nombre email role google'

    .limit(limite)
        .skip(desde)
        .exec((err, usuario) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({}, (err, conteo) => {
                res.json({
                    ok: true,
                    cuantos: conteo,
                    usuario,

                })
            })

            // res.json({
            //     ok: true,
            //     usuario
            // })

        });
});

app.post('/usuario', function(req, res) {

    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcript.hashSync(body.password, 10),
        role: body.role,
        img: body.img
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //let body = req.body;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado'])




    // delete body.password;
    // delete body.google

    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
    })



    res.json({
        cedula: id
    })

});


app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    Usuario.findOneAndRemove(id, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (usuarioBorrado === null) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            })
        }

        res.json({
            ok: true,
            usuario: usuarioBorrado
        })
    })
});

module.exports = app;