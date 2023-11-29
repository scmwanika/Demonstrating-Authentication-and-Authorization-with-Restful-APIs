// IMPORTING DEPENDENCIES
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const secretKey = `${SECRET_KEY}`;

// MIDDLEWARE TO AUTHENTICATE THE TOKEN
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = req.query.token || (authHeader && authHeader.split(" ")[1]);

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = { jwt, secretKey, authenticateToken };
