var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/categories', require('./category/categoryRoutes'));
// router.use('/users', require('./user/userRoutes'));
router.use('/todos', require('./todos/todosRoutes'));

module.exports = router;
