var router = require('express').Router();
var logger = require('../../util/logger');

//route for testing
router.route('/')
  .get(function(req, res){
    logger.log('Hey from categories!!');
    res.send({ok: true});
  });

module.exports = router;
