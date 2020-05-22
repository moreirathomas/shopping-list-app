// Middleware to define the routes for request to /api/users
const express = require("express");
const userService = require("../user.service");
const db = require("../helpers/db");
const User = db.User;

const app = express();

app.get("/api/users", async (req, res, next) => {
  const users = await User.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users/authenticate", (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? //if user is found is db
          res.json(user)
        : // if not
          res.status(400).json({ message: "Username or password incorrect" })
    )
    .catch((error) => next(error));
});

// ??

// app.post("/api/users/authenticate", async (req, res, next) => {
//   // attend user comme un retour de userService qui l'identifie => {username, password} devient {username, password, token}
//   const user = await userService.authenticate(req.body);
//   // puis test voir si y'a cet user dans la db
//   try {
//     user
//       ? res.json(user)
//       : res.status(400).json({ message: "Username or password incorrect" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = app;
