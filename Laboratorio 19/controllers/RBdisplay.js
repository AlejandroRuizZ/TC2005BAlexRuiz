const User = require('../models/user')

module.exports = (request, response, next) => {
    User.getPrivilege(request.session.role)
    .then(([rows,FieldData]) => {
        console.log(rows)
    }).catch(err =>{
        console.log(err)
    })
}