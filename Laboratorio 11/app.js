const express = require('express');
const app = express();
const bodyParser = require('body-parser');




//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use(bodyParser.urlencoded({extended: false}));


app.use('/ruta', (request, response, next) => {
    console.log('respuesta de la Ruta "/ruta"');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/hola', (request, response, next) => {
    console.log('respuesta de la Ruta "/hola"');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/caballos', (request, response, next) => {
    console.log(request.body);
    response.send("Hola, Esta es la respueta de la ruta '/caballos'")
});




app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});



app.listen(3000);
