var express = require('express');
var router = express.Router();

var friendly = require('../models/friendly');

router.get('/', friendly.getAll, renderIndex);
router.get('/:id', friendly.find, renderShow);

function renderIndex(req, res){
  var mustacheVariables = {
    friendly: res.locals.friendly // zy ma smeetaha fel models 
  }
  res.render('./games/index', mustacheVariables);
}

function renderShow(req,res){
  console.log(res.locals.games , res.locals.players)
  var mustacheVariables = {
    friendly: res.locals.friendly, // what do we mean by game and game 
    friendly: res.locals.friendly
  }
  res.render('./games/show', mustacheVariables);
}



module.exports = router;