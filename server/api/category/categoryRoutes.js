var router = require('express').Router();
var logger = require('../../util/logger');
var db = require('./categoryController');

//route for testing
router.route('/')
  .post(function(req, res, next) {
    db.insert(req.body)
      .then(function(category) {
        logger.log(category, 'returned from DB in category routes')
        res.json(category);
      })
      .catch(function(err) {next(err)});
  });

router.param('category', function(req, res, next, category) {
  var categoryTodos;
  if(!category) {
    var err = {Error: 'no category'}
    return next(err);
  } else {
    categoryTodos = db.find(category);
    //hanle error
    req.categoryTodos = categoryTodos;
    logger.log(categoryTodos, 'TODOS FROM DB QUERY');
    next();
  }

})

router.get('/:category', function(req, res) {

    logger.log('data from get request to categories: ',data);
    res.json(category);
  })

module.exports = router;
