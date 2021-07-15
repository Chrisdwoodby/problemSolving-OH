var mysql = require('mysql');
console.log('hello');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M0nsterjack!',
  // database: 'mydb'
  port: 3306
});

connection.connect(function(err) {
  console.log('lop');
  if (err) {
    console.error('name', err);
    return;
  } else {
    console.log('connected to database');
  }
});
// console.log(connection);
connection.query('SELECT * FROM items', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

module.exports = connection;
