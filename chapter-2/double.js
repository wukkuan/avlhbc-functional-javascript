var _ = require('../lib/underscore');

// function a
function double(n) { return n * 2; }

// function b
var doubled = _.map([1, 2, 3], double);

console.log(doubled);
//=> [ 2, 4, 6 ]
