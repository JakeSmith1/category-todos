var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('category', CategorySchema);
