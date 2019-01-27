require("dotenv").config();
const   express = require("express"),
        app     = express();
const PORT = process.env.PORT || 8080;
const appetiteRoutes = require("./routes/appetites");
const errorHandler = require("./handlers/error");
const bodyParser = require("body-parser");
// need json to return routing results in browser
app.use(bodyParser.json());
// need urlencoded to post req.body in postman
app.use(bodyParser.urlencoded({
  extended: true
}));
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