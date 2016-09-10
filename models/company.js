var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logoURL: String
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
