var express = require('express');
var router = express.Router();

var game = require('../models/games');
var players = require('../models/players');
// var allPlayers =  require('../models/players');

router.get('/', game.getAll, renderIndex);
router.get('/:id', game.find, players.findByGame, renderShow);

function renderIndex(req, res){
  var mustacheVariables = {
    games: res.locals.games // zy ma smeetaha fel models 
  }
  res.render('./games/index', mustacheVariables);
}

function renderShow(req,res){
  console.log(res.locals.games , res.locals.players)
  var mustacheVariables = {
    game: res.locals.game, // what do we mean by game and game 
    players: res.locals.players
    // allPlayers: res.local.allPlayers
  }
  res.render('./games/show', mustacheVariables);
}



module.exports = router;