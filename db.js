const mysql = require('mysql2/promise');
const pool = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: 'root',
 database: 'gestionare_produse',
 waitForConnections: true,
 connectionLimit: 10,
 queueLimit: 0,
 socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' 
});
module.exports = pool;

//done
