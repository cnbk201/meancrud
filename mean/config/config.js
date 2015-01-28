
// requireing dev or production js file
module.exports = require('./env/' + process.env.NODE_ENV + '.js');