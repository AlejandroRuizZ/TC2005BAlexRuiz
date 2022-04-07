const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bd_tree',
    password: ''
});

module.exports = pool.promise();
