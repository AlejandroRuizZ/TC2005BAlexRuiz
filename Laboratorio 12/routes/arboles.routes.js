const express = require('express');

const router = express.Router();
const arboles = [{nombre:"Olmo"}, 
{nombre:"Pino"}, 
{nombre:"Roble"}
];
const filesystem = require('fs');
const path = require('path');

router.get('/Alex', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Alex.html'));
});

router.get('/',(request, response, next) =>{
    response.render('lista', {arboles: arboles });
    response.send(respuesta);
});

router.get('/nuevo',(request, response, next) =>{
    response.render('nuevo',{nombre: 'Alex'})
});

router.post('/nuevo',(request,response,next) =>{
    console.log(request.body);
    arboles.push({nombre: request.body.nombre});
    console.log(arboles);
    filesystem.writeFileSync('Arboles.txt', request.body.nombre)
    response.status(303);
    response.redirect('/arboles/');
});

module.exports = router;