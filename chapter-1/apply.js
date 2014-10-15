function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  }
}

var addThree = splat(function(a, b, c) {
  return a + b + c;
});

var sum = addThree([5, 10, 15]);
console.log(sum);
//=> 30
