const   express = require("express"),
        app     = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, process.env.IP, function(){
    console.log("abbey backend server started.");
})