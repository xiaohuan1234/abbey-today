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

// POST - /api/appetites
exports.createAppetite = async function(req, res, next) {
  try {
    let appetite = await db.Appetite.create(req.body);
    return res.status(200).json(appetite);
  } catch (err) {
    return next(err);
  }
};
