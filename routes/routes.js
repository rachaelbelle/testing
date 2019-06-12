var router = require('express').Router();
var db = require('../models')
// var router = express.Router()
router.get("/", function(req, res){
  db.Chocolate.findAll({}).then(function(result){
    res.render('index', {peanut: result})
  })
});

router.get("/form", function(req, res){
  res.render("form")
});

router.post("/api/post", function(req, res){
  db.Chocolate.create({
    "name" : req.body.name
  }).then(function(result){
    res.redirect("/")
  })
});



module.exports = router;
