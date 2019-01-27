var express = require("express"),
    router  = express.Router({mergeParams: true}),
    db  = require("../models");

// Index
router.get("/", function(req, res){
    db.Appetite.find({}, function(err, results) {
        if(err===null) {
            console.log("found these appetites:", results);
            return res.status(200).json(results);
        } else {
            throw(err);
        }
    });
});

module.exports = router;
