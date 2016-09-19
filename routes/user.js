var express = require('express');

router = express.Router();

router.get('/', function(req, res, next){
  res.send("You've hit user");
});

router.get('/:id', function(req, res, next) {
  res.send("You've hit userId:" + req.params.id);
});

module.exports = router;
