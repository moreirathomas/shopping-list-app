// Controller to authenticate the user
// if the provided username and password match the db, create a jwt and give it to this user
const config = require("../config.json");
const jwt = require("jsonwebtoken");
const db = require("./db");
const User = db.User;

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  if (user && user.password === password) {
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...user.toJSON(),
      token,
    };
  }
}

module.exports = authenticate;
