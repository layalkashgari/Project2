var db = require('../db/config');

var games = {};

games.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM games;")
    .then(function(result){
      res.locals.games = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

games.find = function (req, res, next) {
  console.log(req.body)
  db.one("SELECT * FROM games WHERE id=$1;", [req.params.id])
    .then(function (result) {
      console.log(result)
      res.locals.game = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}




// games.findByPlayer = function (req, res, next) {
//   db.manyOrNone("SELECT * FROM students WHERE player_id=$1;", [req.params.id])
//   .then(function (result) {
//     res.locals.students = result;
//     next();
//   })
//   .catch(function (error) {
//     console.log(error);
//     next();
//   })
// }




module.exports = games;