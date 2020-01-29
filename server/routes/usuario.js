const express = require('express'); //se llama al modulo de express
const Usuario = require('../models/usuario') //se define el objeto al cual se le asignaran los metodos
const app = express(); //se nombra al modulo espres como app paara posteriormente su uso
const bcript = require('bcryptjs'); //se hace llamado al modulo bcryptjs, modulo que sirve para la encriptacion de contrasenias
const _ = require('underscore')




app.get('/usuario', function(req, res) { //se crea el metodo get para el js usuario

    let desde = req.query.desde || 0; //se determina que el valor de la variable desde sera lo que se recoja desde el formulario y si este valor no es definido se setea desde 0
    desde = Number(desde); //se convierte el valor obtenido a un valor de tipo numerico
    let limite = req.query.limite || 5; //se determina que el valor de la variable limite sera lo que se recoja desde el formulario y si este valor no es definido se setea desde 5
    limite = Number(limite); //se convierte el valor obtenido a un valor de tipo numerico
    // Usuario.find({ google: true })       //de esta manera se pueden hacer filtros, aqui se hace el filtro a los usuarios que tengan el atributo google true
    Usuario.find({}), 'nombre email role google' //se obtienen los atributos nombrados de los usuarios

    .limit(limite) //se pone un limete para la busqueda
        .skip(desde) // se pone un inicio de busqueda
        .exec((err, usuario) => {
            if (err) {
                return res.status(400).json({ //si existira algun problema se determina el status 400
                    ok: false,
                    err
                });
            }

            Usuario.count({}, (err, conteo) => { //se hace un conteo de todos los usuarios que se haya devuelto
                res.json({
                    ok: true,
                    cuantos: conteo, //se manda el valor del conteo realizado
                    usuario, //se manda los usuarios encoontrados

                })
            })



        });
});

app.post('/usuario', function(req, res) { //se crea el metodo post para el js usuario

    let body = req.body; //se guardan todas las variables que vengan desde el body 
    let usuario = new Usuario({ //se crea un objeto de tipo usuario, y se llenan los atributos de este con los parametros 
        nombre: body.nombre,
        email: body.email,
        password: bcript.hashSync(body.password, 10), //se usa el modulo bcript para encriptar el atributo password
        role: body.role,
        img: body.img
    });

    usuario.save((err, usuarioDB) => { //se guarda el nuevo objeto dentro de la base de datos
        if (err) {
            return res.status(400).json({ //si existira algun problema se determina el status 400
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

app.put('/usuario/:id', function(req, res) { //se crea el metodo put para el js usuario
    let id = req.params.id; //se da un valor a la vriable id que proviene desde el js
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']) //se toman solo los atributos que se encuentran en la lista para guardarlos en la variable body


    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => { //se usa el metodo find para buscar el usuario que tenga el id que se tomo como parametro
        if (err) {
            return res.status(400).json({ //si existira algun problema se determina el status 400
                ok: false,
                ok: false,
                err
            })
        }
    })

    res.json({
        cedula: id
    })

});


app.delete('/usuario/:id', function(req, res) { //se crea el metodo delete para el js usuario
    let id = req.params.id; //se da un valor a la vriable id que proviene desde el js
    Usuario.findOneAndRemove(id, (err, usuarioBorrado) => { // se usa el metodo find y remover para borrar el usuario con el id recolectado
        if (err) {
            return res.status(400).json({ //si existira algun problema se determina el status 400
                ok: false,
                err
            })
        }

        if (usuarioBorrado === null) { //si el id obtenido no existiece se devolvera error
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

module.exports = app; ///se exporta todos los metodos pertenecientes a usuario