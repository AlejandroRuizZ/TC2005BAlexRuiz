const path = require('path');
const filesystem = require('fs');
const Arbol = require('../models/arbol');
const { response } = require('express');


exports.listar = (request, response, next) =>{
    //console.log(request.body)
    //console.log(request.get('Cookie').split("=")[1]);
    //console.log(request.cookies);
    Arbol.fetchAll()
    .then(([rows, fieldData]) =>{
        //console.log(rows);
        response.render('lista', {
            arboles: rows,
            ultimo_arbol: request.cookies.ultimo_arbol ? request.cookies.ultimo_arbol: '',
            usuario: request.session.usuario ? request.session.usuario : ''
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.Alex = (request, response, next) => {
    console.log('SI');
    response.sendFile(path.join(__dirname, '..', 'views', 'Alex.html'));
};

exports.get_nuevo = (request, response, next) =>{
    console.log(request.body);
    response.render('nuevo',{nombre: 'Alex' , usuario: request.session.usuario})
};
exports.displayOne = (request, response, next) => {
    Arbol.findOne(request.params.arbol_id)
    .then(([rows,fieldData]) => {
        response.render('lista',{
            arboles: rows,
            usuario: request.session.usuario ? request.session.usuario : '',
            ultimo_arbol: request.cookies.ultimo_arbol ? request.cookies.ultimo_arbol: ''
        })
    })
}
exports.post_nuevo = (request,response,next) =>{
    console.log('NO1');
    console.log(request.body);
    const arbol = new Arbol(request.body.nombre, request.body.descripcion,request.body.imagen);
    arbol.save()
    .then(()=> {
        response.setHeader('Set-Cookie','ultimo_arbol='+arbol.nombre)
    request.cookies.ultimo_arbol=arbol.nombre;
    response.redirect('/arboles/');
    }).catch(err => console.log(err))
    //filesystem.writeFileSync('Arboles.txt', request.body.nombre)
    //response.status(303);
};