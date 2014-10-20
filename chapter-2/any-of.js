var _ = require('../lib/underscore');
var h = require('../lib/helpers');

function anyOf() {
  return h.exists(_.find(arguments, h.truthy));
}

function T() { return true; }
function F() { return false; }

console.log(anyOf());
console.log(anyOf(F, F));
console.log(anyOf(T, T));
console.log(anyOf(F, T, F, F, F));
