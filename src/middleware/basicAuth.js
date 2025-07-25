const { ADMIN_USER, ADMIN_PASS } = require("../config");

function basicAuth(req, res, next) {
  // Header validation
  const authHeader = req.headers?.authorization;
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="Admin Area"');
    res.status(401).send("Authentication required.");
  }

  // Credentials decoding
  const base64Credentials = authHeader.split(" ")[1];
  const [username, password] = Buffer.from(base64Credentials, "base64")
    .toString("ascii")
    .split(":");

  // Credentials validation
  if (username === ADMIN_USER && password === ADMIN_PASS) return next();

  // Invalid credentials
  res.set("WWW-Authenticate", 'Basic realm="Admin Area"');
  res.status(401).send("Invalid credentials.");
}

module.exports = basicAuth;
