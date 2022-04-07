
const db = require('../util/database')
module.exports = class Arbol {
    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen){
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }
    save(){
        return db.execute('INSERT INTO arboles (nombre, descripcion, imagen) VALUES (?,?,?)',
        [this.nombre,this.descripcion,this.imagen]);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM arboles')
    }
    static findOne(arbolIndividual){
        return db.execute('SELECT * FROM arboles WHERE id =?',[arbolIndividual]);
    }
}