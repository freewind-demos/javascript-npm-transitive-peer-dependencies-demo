const {fnPackage1} = require('javascript-npm-transitive-peer-dependencies-demo--package1');

function fnPackage2(name) {
  return fnPackage1(name) + " (from package2)";
}

module.exports = {
  fnPackage2
}
