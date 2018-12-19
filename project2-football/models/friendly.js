var db = require('../db/config');

var friendly = {};

friendly.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM friendlygame;")
    .then(function(result){
      res.locals.friendly = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

friendly.find = function (req, res, next) {
  console.log(req.body)
  db.one("SELECT * FROM games WHERE id=$1;", [req.params.id])
    .then(function (result) {
      console.log(result)
      res.locals.friendly = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}



module.exports = friendly;