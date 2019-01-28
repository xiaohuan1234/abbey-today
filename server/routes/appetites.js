const express = require("express");
const router = express.Router({mergeParams: true});
    
const {
    createAppetite
} = require("../handlers/appetites");

// prefix - /api/users/:id/appetite
router
  .route("/")
  .post(createAppetite);

module.exports = router;