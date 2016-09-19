var express = require('express');
var userRoute = require('./routes/user')
var adminRoute = require('./routes/admin')
var mailboxRoute = require('./routes/mailbox')
var locationRoute = require('./routes/location')
var app = express();

app.get('/', function (req, res) {
  res.send('Index Page');
});

app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/mailbox', mailboxRoute);
app.use('/location', locationRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
