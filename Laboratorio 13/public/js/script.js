//Problema 1 
function Problema1(){
let Numero = prompt("Dame un Numero.");
document.write("<h3> Problema 1 </h3>")
for (let i = 1; i<=Numero; i++){
    let cuad = i**2;
    let cub = i**3;
    document.write(i + " " + cuad.toString() + " " +cub.toString()+"<br>");
    
}
}

//problema 2
function Problema2(){
    document.write("<h3> Problema 2 </h3>")
    let random1= Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
    let NumeroI = prompt("Cual es el resultado de" + " " +random1.toString() + "+" +random2.toString() + "?");
    let resultado = random1 + random2;
    if(NumeroI == resultado){
        alert("Estas en Lo Correcto!")
        document.write("El resultado Fue Correcto.")
    }else{
        alert("Vuelve a Intentarlo.")
        document.write("El resultado Fue Incorrecto.")
    }
    
}
//problema 3
let FunnyArray= [0,1,2,0,4,5,6,7,0,22,-22]

function Problema3(array){
    let negativos = 0;
    let positivos = 0;
    let zeros = 0;
    for(let arrayVal of array){
        if(arrayVal < 0){
            negativos++;
        }
        else if(arrayVal == 0){
            zeros++;
        }
        else{
            positivos++;
        }
    }
    document.write("Numero de Ceros: " + zeros + " Numero de Negativos: " + negativos +" Numero de Positivos: " + positivos)
}

//problema 4
let UnFunnyArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

];

function Problema4(array){
    let resultingArray =[]
    let rowSum = 0;

    for(let i =0; i < array.length; i++){
        
        for(j=0; j < array[i].length; j++){
            rowSum = rowSum + array[i][j];
        }
        let promedio = rowSum/array.length;
        resultingArray.push(promedio)
        }
        console.log(resultingArray)
        
    }

//for (let i = 0; i < array[i].length; i++){
    //for(let j = 0; j < array.length; j++){
        //sumtotal = sumtotal + array[j][i]  
    //}
//}
    






//problema5
function Espejo(n){
    var digito, resultado = 0
    
    while( n ){
        digito = n % 10 
        resultado = (resultado * 10) + digito  
        n = n/10|0  
    }  

    return resultado;

}
function Problema5(){
    document.write("<h3>Problema 5</h3>")
    n = prompt("Ingrese el Numero a cambiar.")
    
  
    alert("El Inverso es:" + " " + Espejo(n));
    
}

//Problema 6
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

const book1 =
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        getSummary(){
            return `The book ${this.title} was written by ${this.title}`
        },
        getStatus(){
            return `It is ${this.readingStatus} that this book has been read.`

        }
    }
const book2 =
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        getSummary(){
            return `The book ${this.title} was written by ${this.title}`
        },
        getStatus(){
            return `It is ${this.readingStatus} that this book has been read.`

        }
    }
    const book3 =
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        getSummary: function(){
            return `The book ${this.title} was written by ${this.title}`
        },
        getStatus: function(){
            return `It is ${this.readingStatus} that this book has been read.`

        }
    }
    console.log(book1.getSummary(book1));
    console.log(book1.getStatus())
    console.log(book2.getSummary(book1));
    console.log(book2.getStatus())
    console.log(book3.getSummary(book1));
    console.log(book3.getStatus())






Problema1();
Problema2();
Problema3(FunnyArray);
Problema4(UnFunnyArray);
Problema5();
