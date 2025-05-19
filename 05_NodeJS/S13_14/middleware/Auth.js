const jwt = require("jsonwebtoken");
const secret_key =
  "djbvdfjkbvjdkfbvkjdfbvjdjbvdkfjbvkjdfvbjdkbvdjkfvbdfjkvbdjkfvbdfjkvscjdsbfsjdcjksd";

function verifyToken(req, res, next) {
  if (req.headers["authorization"] === undefined) {
    console.log("missing");
    res.send({ ok: false, error: "token is missing" });
  } else {
    const token = req.headers["authorization"].slice(7);
    console.log(token);
    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        console.log(error);
        res.send({ ok: false, error: error });
      } else {
        next();
      }
    });
  }
}

module.exports = verifyToken;
