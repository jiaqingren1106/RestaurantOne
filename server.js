"use strict";

/* Server environment setup */
// To run in development mode, run normally: node server.js
// To run in development with the test user logged in the backend, run: TEST_USER_ON=true node server.js
// To run in production mode, run in terminal: NODE_ENV=production node server.js
const env = process.env.NODE_ENV // read the environment variable (will be 'production' in production mode)

// const USE_TEST_USER = env !== 'production' && process.env.TEST_USER_ON // option to turn on the test user.
// const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file
// const TEST_USER_EMAIL = 'test@user.com'
//////////////////////////////////////
// === Initializing ===
const express = require("express");
const app = express();
const log = console.log;
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const cors = require("cors");
if (env !== 'production') { app.use(cors()) };

//=== MONGODB ===
const { mongoose } = require("./database/mongoose");
mongoose.set('useFindAndModify', false);

const { ObjectID } = require("mongodb");
const User = require("./models/User");
const RestaurantOwner = require("./models/RestaurantOwner");

//=== EXPRESS SESSION ===
const session = require("express-session");
const MongoStore = require('connect-mongo')(session) // to store session information on the database in production

/*** Session handling **************************************/
// Create a session and session cookie
app.use(
  session({
      secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
      resave: false,
      saveUninitialized: false,
      cookie: {
          expires: 60000,
          httpOnly: true
      },
      // store the sessions on the database in production
      store: env === 'production' ? new MongoStore({ mongooseConnection: mongoose.connection }) : null
  })
);

// === ROUTES ===
// Default Route
// app.get("/", (req, res) => res.send('Hello World with Restaurant One'));

// Authentication
app.post("/login", async (req, res) => {
  log("login")
  const email = req.body.email;
  const password = req.body.password;
  log("email: ", email)
  log("password: ", password)

  let chosenUser;
  let chosenRestaurantOwner;

  // log(email, password);
  // Use the static method on the User model to find a user
  // by their email and password
  try{
    chosenUser = await User.findOne({ email: email });
    chosenRestaurantOwner = await RestaurantOwner.findOne({ email: email });
    log("chosenUser: ", chosenUser);
    log("chosenRestaurantOwner: ", chosenRestaurantOwner);
    
    if(chosenUser){
      bcrypt.compare(password, chosenUser.password, (err, result) => {
				if (result) {
					req.session.user = chosenUser._id;
          req.session.email = chosenUser.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
          res.user = chosenUser;
          res.send({ currentUser: chosenUser });
				} else {
          res.status(400).json({error: "User not found"});
				}
			})
    } else if(chosenRestaurantOwner){
      bcrypt.compare(password, chosenRestaurantOwner.password, (err, result) => {
				if (result) {
					req.session.user = chosenRestaurantOwner._id;
          req.session.email = chosenRestaurantOwner.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
          res.send({ currentUser: chosenRestaurantOwner.email, isNewRestaurant: chosenRestaurantOwner.isNewRestaurant});
				} else {
					res.status(400).json({error: "Restaurant Owner not found"});
				}
			})
    } else{
      res.status(400).json({error: "User not found"});
    }
  }catch(e){
    res.status(400).send(e)
  }
});

app.get("/logout", (req, res) => {
  // Remove the session
  req.session.destroy(error => {
      if (error) {
          res.status(500).send(error);
      } else {
          res.send()
      }
  });
});


// All other Route
const userRoutes = require('./routes/user');
const restaurantRoutes = require('./routes/restaurant');
const restaurantOwnerRoutes = require('./routes/restaurantOwner');
const postRoutes = require('./routes/post');
const reviewRoutes = require('./routes/review');
const imageRoutes = require('./routes/image');
const menuRoutes = require('./routes/menu')
const couponRoutes = require('./routes/coupon')

userRoutes(app);
restaurantRoutes(app);
restaurantOwnerRoutes(app);
postRoutes(app);
reviewRoutes(app);
imageRoutes(app);
menuRoutes(app)
couponRoutes(app)
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

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    // const goodPageRoutes = ["/", "/login", "/dashboard"];
    // if (!goodPageRoutes.includes(req.url)) {
    //     // if url not in expected page routes, set status to 404.
    //     res.status(404);
    // }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
});

// === Server Listening ===
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`server running http://localhost:${port}`);
  log(`press CTRL+C to stop server`);
});