var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  location: {
    latitude: String,
    longitude: String
  }
},
{
  timestamp: true
});
