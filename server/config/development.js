module.exports = {
  // enabled logging for development
  logging: true,
  db: {
    //database name is todos, default connection is to port 27017
    //if this fails try 127.0.0.1 instead of localhost
    url: 'mongodb://localhost/todos'
  }
};
