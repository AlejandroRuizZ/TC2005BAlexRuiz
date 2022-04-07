const db = require('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class User {
    constructor(nuevo_usuario,nuevo_passwd, nuevo_nombre) {
        this.usuario = nuevo_usuario;
        this.password = nuevo_passwd;
        this.nombre = nuevo_nombre;
    }
    save(){
        return bcrypt.hash(this.password,12)
            .then((password_cifrado) => {
             return db.execute(
                'INSERT INTO usuarios(username,password,nombre) VALUES (?,?,?)',
                [this.usuario,password_cifrado,this.nombre]);
        }).catch((err) =>{
            console.log(err);
        });
    }
    static login(usuario, password){
        return true;
    }
    static findOne(usuario){
        return db.execute(
            'SELECT * FROM usuarios WHERE username=?',[usuario])
    }
    static getRole(usuario){
        return db.execute(
            'SELECT idRol FROM usuario_rol,usuarios ' + 
            'WHERE usuario_rol.idUsuario = usuarios.username AND username =?',[usuario]
        )
    } static getPrivilege(role){
        return db.execute('SELECT Accion from privilegios,rol_privilegio ' +
         'WHERE privilegios.idPrevilegios = rol_privilegio.idPrivilegio AND idRol =?' [role])
    }
}