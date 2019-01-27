const mongoose = require("mongoose");
var databaseUrl = "mongodb://server:server2019@ds215089.mlab.com:15089/abbey";
mongoose.connect(databaseUrl, { useNewUrlParser: true, keepAlive: true });


const appetiteSchema = new mongoose.Schema({
    cuisine: [String],
    spicy: Boolean,
});

const Appetite = mongoose.model("Appetite", appetiteSchema);
module.exports = Appetite;
