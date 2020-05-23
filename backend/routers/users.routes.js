// Middleware to define the routes for request to /api/users
const express = require("express");
const db = require("../helpers/db");
const authenticate = require("../helpers/auth.controller");
const User = db.User;

const app = express();

// Get All
app.get("/api/users", async (req, res, next) => {
  const users = await User.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Authenticate
app.post("/api/users/authenticate", async (req, res, next) => {
  const user = await authenticate(req.body);
  try {
    user
      ? res.json(user)
      : res.status(400).json({ message: "Username or password incorrect" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.post("/api/users/authenticate", async (req, res, next) => {});

// async fonction qui return userAvecToken ou error 400 mais qui a en elle une async fonction qui query si ya combo user+pass qui match sur mongo puis si oui append le token

module.exports = app;
