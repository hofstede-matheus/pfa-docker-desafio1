const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wowsuchsecret",
  database: "pfa",
});

connection.connect();

module.exports = connection;
