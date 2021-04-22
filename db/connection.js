const mysql = require('mysql');

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Onetwo3@hmad',
  database : 'sabkad'
});
module.exports =pool;