var express = require('express');
var router = express.Router();

var players = require('../models/players');
var games = require('../models/games');

router.get('/', players.getAll, renderIndex);
router.get('/new', games.getAll, renderNew);
router.get('/:id', players.find, renderShow);
router.post('/', players.create, redirectShow);
router.put('/:id', players.update, redirectShow);
router.delete('/:id', players.delete, redirectIndex);
router.get('/:id/edit', players.find, renderEdit);



function renderIndex(req, res){
    var mustacheVariables = {
      players: res.locals.players
    }
    res.render('./players/index', mustacheVariables);
  }

  function renderShow(req, res){
    console.log("show" , res.locals.players)
    var mustacheVariables = {
      player: res.locals.player
    }
    res.render('./players/show', mustacheVariables);
  }


function renderEdit(req, res) {
  var mustacheVariables = {
    player: res.locals.player,
    // games: res.locals.games
  }
  res.render('./players/edit', mustacheVariables);
}


function redirectIndex(req,res){
  console.log("\n\n delete ")
  res.redirect('/players');
}

function redirectShow(req, res) {
  res.redirect(`/players/${res.locals.playerId}`);
}

function renderNew(req, res) {
    var mustacheVariables = {
      players: res.locals.players
    }
    res.render('./players/new', mustacheVariables);
  }



module.exports = router; 