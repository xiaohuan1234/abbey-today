const db = require("../models");

// GET - /api/appetites
exports.getAppetites = async function(req, res, next) {
  try {
    let appetites = await db.Appetite.find();
    return res.status(200).json(appetites);
  } catch (err) {
    return next(err);
  }
};