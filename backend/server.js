// "use strict";
const cors = require("cors");
const express = require("express");
const app = express();

const userRoutes = require('./routes/user');
const restaurantRoutes = require('./routes/restaurant');
const restaurantOwnerRoutes = require('./routes/restaurantOwner');
const postRoutes = require('./routes/post');
const reviewRoutes = require('./routes/review');
const imageRoutes = require('./routes/image');

const bodyParser = require('body-parser')

// === Initializing variables ===
const log = console.log;

// === app.use() ===
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//=== MONGODB ===
const { mongoose } = require("./database/mongoose");
// const imageRoutes = require('./routes/image');

// === ROUTES ===
app.get("/", (req, res) => res.send('Hello World with Restaurant One'));


userRoutes(app);
restaurantRoutes(app);
restaurantOwnerRoutes(app);
postRoutes(app);
reviewRoutes(app);
imageRoutes(app);

// === ERROR HANDLER ===
// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send(`Error: ${err}`);
  next();
});

// === Server Listening ===
const port = process.env.PORT || 3000;
app.listen(port, () => {
  log(`server running http://localhost:${port}`);
  log(`press CTRL+C to stop server`);
});