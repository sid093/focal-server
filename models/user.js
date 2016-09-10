var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  isRegistered: {
    type: Boolean,
    default: false
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  phone: String,
  createdOn: {
    type: Date,
    required: true
  },
  isTracked: {
    type: Boolean,
    default: false
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
