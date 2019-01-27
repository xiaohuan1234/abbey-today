var express = require("express"),
    router  = express.Router({mergeParams: true});
    
const {
    getAppetites
} = require("../handlers/appetites");

// prefix - /api/appetites
router
  .route("/").get(getAppetites);


module.exports = router;