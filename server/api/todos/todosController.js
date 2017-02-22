var Todos = require('./todosModel');
var _ = require('lodash');

exports.find = function(todo) {
  //add bluebird for promises, native promises no longer supported
  Todos.find({todo:todo}).exec(function(err, todo) {
    if(err) {
      return {error: err};
    }
    return todo;
  })
}

exports.insert = function(todo) {
  var promise = new Promise(function(resolve, reject) {
    Todos.create(todo, function(err, todo) {
      if(err) reject({error: true, message:err})
      else resolve({todo, error:false});
    })
  })
  return promise;
}

// var c = new Todo(todo);
// c.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })

// or

// Todo.create(todo, function (err, todo) {
//   if (err) return handleError(err);
//   // saved!
// })
