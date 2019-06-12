var router = require('express').Router();
var db = require('../models')
// var router = express.Router()
router.get("/", function(req, res){
  db.Chocolate.findAll({}).then(function(result){
    res.json(result)
  })
});

router.post("/", function(req, res){
  db.Chocolate.create({
    "name" : req.body.name
  }).then(function(result){
    res.json(result)
  })
});

module.exports = router;
