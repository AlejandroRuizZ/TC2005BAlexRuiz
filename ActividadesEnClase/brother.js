//fs: filesystem
const filesystem = require("fs");

filesystem.writeFileSync("hola.txt","Hola desde Node");

const arreglo = [5000, 60,90,100,10,28,0,128,2000,348,1000,50]

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);  
}

const http = require("http");

const server = http.createServer( (request, response) =>{
    console.log(request)
    response.setHeader("content-type","text/html");
    response.write("hello");
    response.end();
});

server.listen(3000);






 
