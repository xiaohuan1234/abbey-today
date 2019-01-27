const   express = require("express"),
        app     = express();

const PORT = process.env.PORT || 8080;

const appetiteRoutes = require("./routes/appetites");
app.use(appetiteRoutes);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(PORT, process.env.IP, function(){
    console.log("abbey backend server started.");
})