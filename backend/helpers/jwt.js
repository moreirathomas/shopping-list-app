// middleware to check if the JWT token received is valid before allowing access to the API
const config = require("../config.json");
const expressJwt = require("express-jwt");

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret }).unless({
    path: ["/api/users/authenticate"],
  });
}

module.exports = jwt;
