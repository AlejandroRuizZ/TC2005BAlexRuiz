const filesystem = require("fs");

var FunnyArray = [2,4,6,8,10,12,14,16]
var cont = 0;
function ArraySum(array) {
    for(let i=0; i < array.length; i++){
        cont = cont + array[i]
    }
    let promedio = cont/array.length;
    console.log(promedio);
    return promedio;
    
}
var stringiestring = "Hola soy un Stringie String"
function StringPrint(string){
    filesystem.writeFileSync("Output.txt",string);
    
}
//problema https://codeforces.com/problemset/problem/236/A
var username = "abcde"
function BoyOrGirl(string){
    if(string.length % 2 == 0){
        console.log("It's A she")
    }else{
        console.log("It's a he")
    }

}
const http = require("http");

filesystem.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});




ArraySum(FunnyArray)
StringPrint(stringiestring)
BoyOrGirl(username)



