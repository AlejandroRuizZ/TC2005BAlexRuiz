const express = require('express');
const app = express();

const bodyParser = require('body-parser');


const rutas_arboles = require('./routes/arboles.routes')
const rutas_animales = require('./routes/animales.routes')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/arboles',rutas_arboles);
app.use('/animales', rutas_animales);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
        console.log('Respuesta de la ruta "/ruta"');
        response.send('Respuesta de la ruta "/ruta"'); 
    });
    
    app.use('/hola', (request, response, next) => {
        console.log('Respuesta de la ruta "/hola"');
        response.send('¡Hola! Esta es la respuesta de la ruta "/hola"'); 
    });


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404)
    response.send('Error 404. No existe esa Ruta.');
    ; //Manda la respuesta
});

app.listen(3000);