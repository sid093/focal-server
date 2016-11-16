function Authenticate(req, res, next) {
  var now = new Date();
  console.log(now.toString() + '| Access to ' + req.path + ' attempted from: ' + req.hostname + "<->" + req.ip );
  if (false) {
    next();
  } else {
    res.redirect('/web/404.html');
    console.log('Access denied');
  }
}
module.exports = Authenticate
