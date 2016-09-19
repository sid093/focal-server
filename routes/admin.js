var express = require('express');

router = express.Router();

router.get('/', function(req, res, next){
  res.send("You've hit admin");
});

router.get('/:id', function(req, res, next) {
  res.send("You've hit adminId:" + req.params.id);
});

module.exports = router;
