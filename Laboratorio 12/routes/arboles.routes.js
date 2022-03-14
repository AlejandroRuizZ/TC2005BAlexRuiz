const express = require('express');

const router = express.Router();
const arboles = ["Olmo", "Pino", "Roble"];
const filesystem = require('fs');
const path = require('path');

router.get('/Alex', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Alex.html'));
});

router.get('/',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Arboles</h1><main><h2>Existen Arboles</h2><p>Estos son los Arboles:</p><ol>';
    for (let i in arboles){
        respuesta += '<li>' + arboles[i] + '</li>';
    }
    respuesta += '</ol><a href="/arboles/nuevo">Agregar un nuevo Arbol</a></main></body></html>'
    response.send(respuesta);
});

router.get('/nuevo',(request, response, next) =>{
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de Arboles</h1><main><h2>Aquí se habla se de nuevos Arboles</h2><p>Ingresa los datos del nuevo Arbol:</p><form action="/arboles/nuevo" method="POST"><label for="nombre">Nombre del nuevo Arbol: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/arboles">Regresar a la lista de Arboles</a></br></body></html>';
    response.send(respuesta);
});

router.post('/nuevo',(request,response,next) =>{
    console.log(request.body);
    arboles.push(request.body.nombre);
    console.log(arboles);
    filesystem.writeFileSync('Arboles.txt', request.body.nombre)
    response.status(303);
    response.redirect('/arboles/');
});

module.exports = router;