require("dotenv").load();
var jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if(err) throw(err);
      if (decoded) {
        next();
      } else {
        return next({ status: 401, message: "Please Log In First" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Please Log In First" });
  }
};