const config = require("./config.json");
const jwt = require("jsonwebtoken");
const db = require("./helpers/db");
const User = db.User;

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  // if there is a user found in db and if the provided password matches create a jwt
  if (user && password === user.password) {
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      // return {username: '...', password: '...', token:'...'}
      ...user.toJSON(),
      token,
    };
  }
}

module.exports = authenticate;

// only to authenticate, there is only one user for simplicity sake
// => à mettre dans les services de l'app puis lié les routes de req
