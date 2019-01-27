const mongoose = require("mongoose");

const appetiteSchema = new mongoose.Schema({
    cuisine: [String],
    spicy: Boolean,
});

const Appetite = mongoose.model("Appetite", appetiteSchema);
module.exports = Appetite;
