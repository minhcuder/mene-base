var express = require("express");
var router = express.Router();
var homeCtrl = require("../controllers/home.controller");

router.get("/home", homeCtrl.index);
router.get("/contact", homeCtrl.contact);

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("Welcome !");
});

module.exports = router;
