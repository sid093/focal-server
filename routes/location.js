var express = require('express');

router = express.Router();

router.get('/', function(req, res, next){
  res.send("You've hit location");
});

router.get('/:userId', function(req, res, next) {
  res.send("You've hit location of user:" + req.params.userId);
});

module.exports = router;
