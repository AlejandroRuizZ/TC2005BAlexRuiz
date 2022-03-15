const path = require('path');
const filesystem = require('fs');
const Arbol = require('../models/arbol');


exports.listar = (request, response, next) =>{
    console.log(request.body)
    console.log(request.get('Cookie').split("=")[1]);
    console.log(request.cookies);
    response.render('lista',{
        arboles: Arbol.fetchAll(),
        ultimo_arbol: request.cookies.ultimo_arbol ? request.cookies.ultimo_arbol : ''  
    });
};

exports.Alex = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Alex.html'));
};

exports.get_nuevo = (request, response, next) =>{
    console.log(request.body);
    response.render('nuevo',{nombre: 'Alex'})
};

exports.post_nuevo = (request,response,next) =>{
    console.log(request.body);
    const arbol = new Arbol(request.body.nombre);
    arbol.save();
    filesystem.writeFileSync('Arboles.txt', request.body.nombre)
    response.status(303);
    response.setHeader('Set-Cookie','ultimo_arbol='+arbol.nombre)
    request.cookies.ultimo_arbol=arbol.nombre;
    response.redirect('/arboles/');
};