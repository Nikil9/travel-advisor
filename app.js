const express = require('express');
const mysql = require('mysql');
const app = express();

// app.use(cors());
// app.use(fileupload());
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use(express.json());

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

app.get("/api/validateLogin", (req, res) => {  
  const name = req.query.name;
  const pass = req.query.password;

  connection.query("SELECT * FROM login WHERE user_id=? AND password=?",
  [name,pass],
  (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error in Login");
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => console.log('App listening on port 4000'));