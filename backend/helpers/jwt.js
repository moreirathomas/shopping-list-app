// middleware to check if the JWT token received is valid before allowing access to the API
const config = require("../config.json");
const expressJwt = require("express-jwt");

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    // routes that don't need auth
    path: ["/login"],
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  if (!user) {
    return done(null, true);
  }
  done();
}

module.exports = jwt;
