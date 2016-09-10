var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  from : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  isRead: {
    type: Boolean,
    default: false
  }
},
{
  timestamp: true
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
