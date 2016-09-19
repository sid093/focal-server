var express = require('express');

router = express.Router();

router.get('/', function(req, res, next){
  res.send("You've hit mailbox");
});

router.get('/:userId', function(req, res, next) {
  res.send("You've hit mailbox of user:" + req.params.userId);
});

module.exports = router;
