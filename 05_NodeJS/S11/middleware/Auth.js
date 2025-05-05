const jwt = require("jsonwebtoken");
const secret_key =
  "djbvdfjkbvjdkfbvkjdfbvjdjbvdkfjbvkjdfvbjdkbvdjkfvbdfjkvbdjkfvbdfjkvscjdsbfsjdcjksd";

function verifyToken() {
  if (req.headers["authorization"] === undefined) {
    res.send({ ok: false, error: "token is missing" });
  } else {
    const token = req.headers["authorization"].slice(7);
    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        res.send({ ok: false, error: error });
      } else {
        next();
      }
    });
  }
}

module.exports = verifyToken;
