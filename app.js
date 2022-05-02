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
  database: 'travel_advisor',
  multipleStatements: true
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

app.get("/api/getFlightList", (req, res) => {  
  const source = req.query.source;
  const destination = req.query.destination;
  const date = req.query.date;
  connection.query("SELECT * FROM flight WHERE source=? AND destination=? AND departure_date=?",
  [source,destination,date],
  (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error in Flight Search");
    } else {
      res.send(result);
    }
  });
});

app.post("/signup", (req, res) => {
  const user_id = req.body.user_id;
  const name = req.body.name;
  const password = req.body.password;
  const type = req.body.type;

  connection.query(
    "INSERT INTO login (user_id, password, name, type) values (?,?,?,?)",
    [user_id, name, password, type],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error in sign up");
      } else {
        res.send("user created");
      }
    }
  );
});

app.put("/BookFlight", (req, res) => {
  const booking_id = req.body.bookingId;
  const Tclass = req.body.class;
  const seat_num = req.body.seat_num;
  const price = req.body.price;
  const flight_num = req.body.flight_num;
  const customer_id = req.body.customer_id;
  const order_id = req.body.order_id;
  connection.query( "INSERT INTO flight_booking_details (booking_id, class, seat_num, price,flight_num,customer_id, order_id) values (?,?,?,?,?,?,?)",
  [booking_id, Tclass,seat_num, price,flight_num,customer_id, order_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error in flight booking");
      } else {
        res.send("booking successful");
      }
    }
  );
});

app.put("/BookFlightOrder", (req, res) => {
  const booking_id = req.body.bookingId;
  const Tclass = req.body.class;
  const seat_num = req.body.seat_num;
  const price = req.body.price;
  const flight_num = req.body.flight_num;
  const customer_id = req.body.customer_id;
  const order_id = req.body.order_id;
  connection.query("INSERT INTO orders (order_id, date, flight_booking_id,amount) values (?,?,?,?)",
    [order_id,'2022-04-29',booking_id,price ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error in booking order");
      } else {
        res.send("booking order successful");
      }
    }
  );
});

app.get('/getHotelList', (req, res) => {  
  const city = req.query.city;
  //"SELECT DISTINCT hotel_details.hotel_id from hotel_details, room where hotel_details.hotel_id=room.hotel_id and hotel_details.city= ? and room.status=?",
  connection.query("select distinct * from hotel_details join room on room.hotel_id=hotel_details.hotel_id and room.status=? and hotel_details.city=?",
  ['V',city],
  (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error in Hotel Search");
    } else {
      res.send(result);
    }
  });
});

app.put("/BookHotel", (req, res) => {
  const booking_id = req.body.bookingId;
  const type = req.body.type;
  const price = req.body.price;
  const booking_date = req.body.booking_date;
  const customer_id = req.body.customer_id;
  const order_id = req.body.order_id;
  const room_number = req.body.room_number
  connection.query( "INSERT INTO room_booking_details (booking_id, type, booking_date,  order_id, customer_id,room_number) values (?,?,?,?,?,?)",
  [booking_id, type,booking_date, order_id,customer_id, room_number],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error in hotel booking");
      } else {
        res.send("booking successful");
      }
    }
  );
});

app.put("/BookHotelOrder", (req, res) => {
  const booking_id = req.body.bookingId;
  const type = req.body.type;
  const price = req.body.price;
  const booking_date = req.body.booking_date;
  const customer_id = req.body.customer_id;
  const order_id = req.body.order_id;
  const room_number = req.body.room_number
  connection.query("INSERT INTO orders (order_id, date, hotel_booking_id,amount) values (?,?,?,?)",
    [order_id,'2022-04-29',booking_id,price ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error in booking order");
      } else {
        res.send("booking order successful");
      }
    }
  );
});

//app.get('/getHotels', (req, res) => {
//   var sql = "SELECT * FROM hotel_details where owner_id=?";
//   connection.query(sql, function(err, results) {
//     if (err) throw err;
//     res.json({news: results});
//   });
// });


app.listen(4000, () => console.log('App listening on port 4000'));