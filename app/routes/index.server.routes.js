//used CommonJS module pattern again to export functions. required index controller and use its render() method as a middleware to GET requests made to the root path.

//Making sure our Express application always returns the main application view when receiving routes that are undefined.
module.exports = function(app) {
  const index = require('../controllers/index.server.controller');
  app.get('/*', index.render);
};
