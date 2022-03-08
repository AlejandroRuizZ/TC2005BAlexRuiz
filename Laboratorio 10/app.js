const filesystem = require('fs');
 
 filesystem.writeFileSync('hola.txt', 'Hola desde node');
 
 
 const arreglo = [5000, 60, 90, 100, 10, 10000, 20, 0, 120, 2000, 340, 1000, 50];
 
 for (let item of arreglo) {
     setTimeout(() => {
         console.log(item);
     }, item);
    }

    const arboles = ["Olmo", "Pino", "Roble"];

    const http = require('http');

    const server = http.createServer( (request, response) => {
        if (request.url === '/') {
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head>');
                    response.write('<body>');
                    response.write('<h1>Arboles</h1>');
                    response.write('<main>');
                    response.write('<h2>Existen Arboles</h2>');
                    response.write('<p>Estos son los Arboles:</p>');
                    response.write('<ol>');
                    for (let i in arboles) {
                        response.write('<li>' + arboles[i] + '</li>');
                    }
                    response.write('</ol>');
                   response.write('<a href="nuevo">Agregar un nuevo Arbol</a>');
                   response.write('<a href="animales"> Ver Animales que viven en los Arboles.')
                    response.write('</main>');
                    response.write('</body>');
                    response.end();
                } else if (request.url === '/nuevo' && request.method === 'GET') {
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head>');
                    response.write('<body>');
                    response.write('<h1>Bienvenido a este sitio de Arboles</h1>');
                    response.write('<main>');
                    response.write('<h2>Aquí se habla se de nuevos Arboles</h2>');
                    response.write('<p>Ingresa los datos del nuevo Arbol:</p>');
                    response.write('<form action="/nuevo" method="POST">');
                    response.write('<label for="nombre">Nombre del nuevo Arbol: </label>');
                    response.write('<input type="text" name="nombre" required>');
                    response.write('<input type="submit" value="Enviar">');
                    response.write('</form>');
                    response.write('<br><br>');
                    response.write('<a href="/">Regresar a la lista de Arboles</a>');
                   response.write('</br>');
                    response.write('</body>');
                    response.end();
                }else if (request.url === '/animales' && request.method === 'GET') {
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head>');
                    response.write('<body>');
                    response.write('<h1>Animales en los Arboles</h1>');
                    response.write('<main>');
                    response.write('<h2>Existen Animales</h2>');
                    response.write('<p>Viven en los arboles. Pajaros, Ardillas, y insectos.</p>');
                    

                }
                 else if (request.url === '/nuevo' && request.method === 'POST') {
                    const datos = [];
                    request.on('data', (dato) => {
                        console.log(dato);
                        datos.push(dato);
                    });
                   return request.on('end', () => {
                        console.log(datos);
                        const datos_completos = Buffer.concat(datos).toString();
                        console.log(datos_completos);
                        const nuevo_dato = datos_completos.split('=')[1];
                        console.log(nuevo_dato);
                        arboles.push(nuevo_dato);
                        filesystem.writeFileSync('Arboles.txt', nuevo_dato)
                       console.log(arboles);
                        response.setHeader('Content-Type', 'text/html');
                        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Arboles</title><meta charset="utf-8"></meta></head>');
                        response.write('<body>');
                        response.write('<h1>Arboles</h1>');
                        response.write('<main>');
                        response.write('<h2>Existen Arboles</h2>');
                        response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
                        response.write('<p>Estos son nuestros Arboles:</p>');
                        response.write('<ol>');
                        for (let i in arboles) {
                            response.write('<li>' + arboles[i] + '</li>');
                        }
                        response.write('</ol>');
                       response.write('<a href="nuevo">Agregar un nuevo Arbol</a>');
                        response.write('</main>');
                        response.write('</body>');
                        return response.end();
                    });
                } else {
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos | Page not found</title><meta charset="utf-8"></meta></head>');
                    response.write('<body>');
                    response.write('<h1>La página '+ request.url +' no se encontró</h1>');
                    response.write('</body>');
                    response.end();
                }
    
 });
 
 server.listen(3000);

    
