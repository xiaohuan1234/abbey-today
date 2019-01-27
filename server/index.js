const   express = require("express"),
        app     = express();
const PORT = process.env.PORT || 8080;
const appetiteRoutes = require("./routes/appetites");
const errorHandler = require("./handlers/error");
const bodyParser = require("body-parser");

app.use("/api/appetites", appetiteRoutes);
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(errorHandler);

app.use(bodyParser.json());

app.listen(PORT, process.env.IP, function(){
    console.log("abbey backend server started.");
})