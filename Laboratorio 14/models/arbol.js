const arboles = [
{nombre:"Olmo"}, 
{nombre:"Pino"}, 
{nombre:"Roble"}
]; 

module.exports = class Arbol {
    constructor(nuevo_nombre){
        this.nombre =nuevo_nombre;
    }
    save(){
        arboles.push(this);
        console.log(arboles);
    }
    static fetchAll(){
        return arboles;
    }
}