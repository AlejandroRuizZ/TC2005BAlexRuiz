const arboles = [
{nombre:"Olmo"}, 
{nombre:"Pino"}, 
{nombre:"Roble"}
]; 

const db = require('../util/database')
module.exports = class Arbol {
    constructor(nuevo_nombre){
        this.nombre =nuevo_nombre;
    }
    save(){
        arboles.push(this);
        console.log(arboles);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM arboles')
    }
}