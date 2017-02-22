var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = ['yellow', 'green', 'blue', 'red'];

var TodoSchema = new Schema({
  //add date validations?
  start: {
    type: String,
    required: true,
    unique: true
  },
  
  end: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  priority: {
    type: String,
    required: true,
    enum: options
  },

  category: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('todos', TodoSchema);
