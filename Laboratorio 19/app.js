const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const csrf = require('csurf');
const csrfProtection = csrf();

const rutas_arboles = require('./routes/arboles.routes')
const rutas_animales = require('./routes/animales.routes')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_usuarios = require('./routes/auth.routes')
const path = require('path')




app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'gKNJFYzbZ4FMaXmTbXhB',
    resave: false,
    saveUninitialized: false,
}));    

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(csrfProtection);

app.use((request, response,next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use(cookieParser());
app.use('/arboles',rutas_arboles);
app.use('/animales', rutas_animales);
app.use('/users',rutas_usuarios);

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