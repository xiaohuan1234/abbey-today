const db = require("../models");

// GET - /api/appetites
exports.getAppetites = async function(req, res, next) {
  try {
    let appetites = await db.Appetite.find();
    return res.status(200).json(appetites);
  } catch (err) {
    return next(err);
  }
};''

// POST - /api/users/:id/appetite
exports.createAppetite = async function(req, res, next) {
  try {
    let appetite = await db.Appetite.create({
      cuisine: req.body.cuisine,
      spicy: req.body.spicy,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.appetite = appetite.id;
    await foundUser.save();
    let foundAppetite = await db.Appetite.findById(appetite._id).populate("user", {
      username: true
    });
    return res.status(200).json(foundAppetite);
  } catch (err) {
    return next(err);
  }
};