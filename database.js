const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'student_attendance',
    password: 'sata_oishi@2018'
});

module.exports = pool.promise();