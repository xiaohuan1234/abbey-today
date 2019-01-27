var express = require("express"),
    router  = express.Router({mergeParams: true}),
    Appetite  = require("../models/appetite");

// Index
router.get("/", function(req, res){
    Appetite.find({}, function(err, results) {
        if(err===null) {
            console.log("found these appetites:", results);
            return res.status(200).json(results);
        } else {
            throw(err);
        }
    });
});

module.exports = router;
