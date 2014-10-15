function exists(x) {
  return x!= null;
}

function truthy(x) {
  return (x !== false) && exists(x);
}

// comparator is a higher order function because
// it takes a function and returns a new function
function comparator(pred) {
  return function(x, y) {
    if (truthy(pred(x, y))) return -1;
    else if (truthy(pred(y, x))) return 1;
    else return 0;
  }
}

function lessThan(x, y) {
  return x < y;
}

function greaterThan(x, y) {
  return x > y;
}

function isEqual(x, y) {
  return x == y;
}

var resultAsc = [100, 1, 0, 10, -1, -2, -1].sort(comparator(lessThan));
console.log(resultAsc);
//=> [ -2, -1, -1, 0, 1, 10, 100 ]

var resultDesc = [100, 1, 0, 10, -1, -2, -1].sort(comparator(greaterThan));
console.log(resultDesc);
//=> [ 100, 10, 1, 0, -1, -1, -2 ]

var resultWat = [100, 1, 1, 0, 10, -1, -2, -1].sort(comparator(isEqual));
console.log(resultWat);
//=> [ 100, 1, 1, 0, 10, -1, -2, -1 ]
