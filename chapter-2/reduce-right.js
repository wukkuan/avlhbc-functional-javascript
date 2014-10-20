var _ = require('../lib/underscore');

function allOfReduceRight() {
  if (_.isEmpty(arguments)) return true;
  return _.reduceRight(arguments, function(truth, f) {
    return truth && f();
  }, true);
}

function allOfReduce() {
  if (_.isEmpty(arguments)) return true;
  return _.reduce(arguments, function(truth, f) {
    return truth && f();
  }, true);
}

function T() { return true; }
function F() { return false; }

console.log(allOfReduceRight());
console.log(allOfReduceRight(T, T));
console.log(allOfReduceRight(T, T, T, T, F));
//=> true
//=> true
//=> false

console.log(allOfReduce());
console.log(allOfReduce(T, T));
console.log(allOfReduce(T, T, T, T, F));
//=> true
//=> true
//=> false
