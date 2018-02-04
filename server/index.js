const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require('cookie-session');
require("./models/User"); // load user model
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookie lasts 30 days
    keys: [keys.cookieKey]
  })
);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
