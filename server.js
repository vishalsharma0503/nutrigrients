const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");


const app = express();
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server is up on 5000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected Mongoose");
  })
  .catch(err => console.log(err));

app.get("/", () => {
  console.log("The app works");
});

app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);
