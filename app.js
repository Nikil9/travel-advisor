const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'travel_advisor'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});

app.get('/api/login', (req, res) => {
  var sql = "SELECT * FROM login";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({news: results});
  });
});

app.listen(4000, () => console.log('App listening on port 4000'));