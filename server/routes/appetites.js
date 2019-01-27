const express = require("express");
const router = express.Router({mergeParams: true});
    
const {
    getAppetites,
    createAppetite
} = require("../handlers/appetites");

// prefix - /api/appetites
router
  .route("/")
  .post(createAppetite)
  .get(getAppetites);

module.exports = router;