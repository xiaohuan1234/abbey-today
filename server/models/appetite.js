const mongoose = require("mongoose");

const appetiteSchema = new mongoose.Schema({
    cuisine: [String],
    spicy: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
},
{
    timestamps: true
 });

const Appetite = mongoose.model("Appetite", appetiteSchema);
module.exports = Appetite;
