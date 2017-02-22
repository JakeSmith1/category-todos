var Category = require('./categoryModel');
var _ = require('lodash');

exports.find = function(category) {
  //add bluebird for promises, native promises no longer supported
  Category.find({category:category}).exec(function(err, category) {
    if(err) {
      return {error: err};
    }
    return category;
  })
}

exports.insert = function(category) {
  var promise = new Promise(function(resolve, reject) {
    Category.create(category, function(err, category) {
      if(err) reject({error: true, message:err})
      else resolve({category, error:false});
    })
  })
  return promise;
}

// var c = new Category(category);
// c.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })

// or

// Category.create(category, function (err, category) {
//   if (err) return handleError(err);
//   // saved!
// })
