const _ = require('lodash')

function cap(name) {
  return _.capitalize(name);
}

module.exports = {
  cap
}
