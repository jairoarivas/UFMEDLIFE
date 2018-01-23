//loads correct configuration file according to the process.env.NODE_ENV variable. 
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
