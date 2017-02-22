var logger = require('../util/logger');
module.exports = function() {
  return function(err, req, res, next) {
    if(err) {
      logger.log(err.message, 'ERROR MESSAGE');
      res.status(500).send(err);
    }
    next();
  }
}
