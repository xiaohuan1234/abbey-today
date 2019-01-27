const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

var databaseUrl = "mongodb://server:server2019@ds215089.mlab.com:15089/abbey";
mongoose.connect(databaseUrl, { useNewUrlParser: true, keepAlive: true });

module.exports.User = require("./user");
module.exports.Appetite = require("./appetite");
