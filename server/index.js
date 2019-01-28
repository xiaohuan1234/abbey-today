require("dotenv").config();
const   express = require("express"),
        app     = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
const authRoutes = require("./routes/auth");
const appetiteRoutes = require("./routes/appetites");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const errorHandler = require("./handlers/error");
const bodyParser = require("body-parser");


// need json to return routing results in browser
app.use(bodyParser.json());
// need urlencoded to post req.body in postman
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/appetites",
  loginRequired,
  ensureCorrectUser,
  appetiteRoutes
);
app.get("/api/appetites", loginRequired, async function(req, res, next) {
  try {
    let appetites = await db.Appetite.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
    return res.status(200).json(appetites);
  } catch (err) {
    return next(err);
  }
});
app.use("/api/appetites", appetiteRoutes);
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, process.env.IP, function(){
    console.log("abbey backend server started.");
})