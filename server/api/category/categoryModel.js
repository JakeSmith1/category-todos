var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = ['yellow', 'green', 'blue', 'red'];

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: options
  }
});

module.exports = mongoose.model('category', CategorySchema);
