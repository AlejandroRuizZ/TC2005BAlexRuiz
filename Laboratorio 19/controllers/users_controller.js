const User = require('../models/user');
const bcrypt = require('bcryptjs')

exports.get_login = (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    //console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario
    });
};

exports.login = (request, response, next) => {
    //console.log(request.body.nombre)
    User.getRole(request.body.nombre)
    .then(([rows,FieldData]) => {
        request.session.role = rows;
    }).catch(err => {
        console.log(err);
    });
    console.log(request.session.role);
    User.findOne(request.body.nombre)
    .then(([rows,fieldData]) => {
        //console.log(rows);
        if (rows.length < 1) {
            return response.redirect('/users/login')
        }
        const user = new User(rows[0].username, rows[0].password, rows[0].nombre);
        //console.log(user)
        bcrypt.compare(request.body.passwd, user.password)
        .then(DoMatch => {
            if(DoMatch) {
                request.session.isLoggedIn = true;
                request.session.user;
                request.session.usuario = user.nombre;
                return request.session.save(err =>{
                    response.redirect('/arboles/');
                });

            }
            response.redirect('/users/login');
        }).catch(err => {
            response.redirect('/users/login');
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.get_signup = (request, response, next) => {
    response.render('signup',{
        usuario: request.session.usuario ? request.session.usuario : '',
    })
}

exports.post_signup = (request,response,next) => {
    const nuevo_usuario = new User(request.body.username, request.body.password,request.body.nombre);
    nuevo_usuario.save()
    .then(() =>{
        response.redirect('/users/login');
    }).catch((err)=>{
        console.log(err);
    })
};

exports.logout = (request,response,next) =>{
    request.session.destroy(()=>{
        response.redirect('/users/login')
    });
};