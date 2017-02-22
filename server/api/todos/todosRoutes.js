var router = require('express').Router();
var logger = require('../../util/logger');
var db = require('./todosController');

//route for testing
router.post('/', function(req, res, next) {
    db.insert(req.body)
      .then(function(category) {
        logger.log(category, 'returned from DB in category routes')
        res.json(category);
      })
      .catch(function(err) {next(err)});
  });

router.param('todo', function(req, res, next, todo) {
  var todoData;
  if(!todo) {
    var err = {Error: 'no todo'}
    return next(err);
  } else {
    //does this need to be a promise?
    todoData = db.find(todo);
    //hanle error
    req.todoData = todoData;
    logger.log(todoData, 'TODOS FROM DB QUERY');
    next();
  }

})

router.get('/:todo', function(req, res) {
    logger.log('data from get request to todos: ');
    res.json(category);
  })

module.exports = router;
