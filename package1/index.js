const _ = require('lodash');

function fnPackage1(name) {
  return _.capitalize(name) + " (from package1)";
}

module.exports = {
  fnPackage1
}
