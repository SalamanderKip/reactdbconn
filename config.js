var mysql = require('mysql');
let connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: '3306'
});

exports.connection = connection