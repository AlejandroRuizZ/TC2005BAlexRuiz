const express = require('express');

const router = express.Router();

router.get('/',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Animales en los Arboles</h1><main><h2>Existen Animales</h2><p>Viven en los arboles. Pajaros, Ardillas, y insectos.</p></body></html>';
    response.send(respuesta);
});

router.get('/pajaro',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Pajaros</h1><main><h2>Existen Pajaros</h2><p>Viven en los arboles.</p></body></html>';
    response.send(respuesta);
});
router.get('/ardilla',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Ardilla</h1><main><h2>Existen Ardillas</h2><p>Viven en los arboles.</p></body></html>';
    response.send(respuesta);
});
router.get('/insecto',(request, response, next) =>{
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head><body><h1>Insectos.</h1><main><h2>Existen Insectos</h2><p>Viven en los arboles.</p></body></html>';
    response.send(respuesta);
});

module.exports = router;