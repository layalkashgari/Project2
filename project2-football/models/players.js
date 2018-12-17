var db = require('../db/config');
var players = {};

players.getAll = function(req, res, next){
    db.manyOrNone('SELECT * FROM players;')
      .then(function(result){
        res.locals.players = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  players.find = function (req, res, next) {
    db.one('SELECT * FROM players WHERE id = $1;', [req.params.id])
      .then(function (result) {
        res.locals.player = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  players.create = function (req, res, next) {
    console.log(req.body);
    db.one('INSERT INTO players(fname, lname, position) VALUES ($1,$2,$3) RETURNING id;',
          [req.body.fname, req.body.lname, req.body.position])
      .then(function (result) {
        res.locals.playerId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  players.update = function (req, res, next) {
    console.log("inside update") ;
    console.log("inside update" , req.body)
    db.one('UPDATE players SET fname=$1, lname=$2, position=$3 WHERE id=$4 RETURNING id;',
          [req.body.fname, req.body.lname, req.body.position, req.params.id])
      .then(function (result) {
        console.log("inside update" , result)
        res.locals.playerId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  
  
  players.delete = function (req, res, next) {
    console.log("\n\n delete ")
    db.none('DELETE FROM players WHERE id=$1;', [req.params.id])
      .then(function () {
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  

  players.findByGame = function (req, res, next) {
    db.manyOrNone('SELECT * FROM players JOIN players_games ON players_games.player_id = players.id WHERE players_games.game_id = $1;', [req.params.id])
      .then(function (result) {
        console.log(result);
        res.locals.players = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

module.exports = players;

