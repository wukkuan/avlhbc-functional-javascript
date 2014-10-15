[![Screenshot](cover.png)](http://www.amazon.com/dp/B00D624AQO)

# Summary
Notes and code snippets while studying [Functional JavaScript](http://www.amazon.com/dp/B00D624AQO) by Michael Fogus, with the [Asheville Hacker Book Club](http://eepurl.com/4WaUf).

### Contents:
- [Preface](#preface)
- [Chapter 1](#chapter-1)

# Preface

### code conventions:
- avoid assigning variables more than once
- no eval
- no monkey patching
- favor functions over methods


# Chapter 1

## the case for javascript:


### passing functions

> __[!]__ i often forget i can pass functions as parameters, without defining an anonymous function every time.

for example:

```javascript
// i tend to reach for this:
[1, 2, 3].forEach(function(n) {
  alert(n);
});

// and forget this:
[1, 2, 3].forEach(alert);

function note(message) {
  console.log(message);
}

function prettyNumber(n) {
  return 'Hello, I am the number ' + n;
}

// and this:
[1, 2, 3].map(prettyNumber)
         .forEach(note);

//=> Hello, I am the number 1
//=> Hello, I am the number 2
//=> Hello, I am the number 3
```
→ [__pass-the-func.js__](/chapter-1/pass-the-func.js)

### apply/call

i rarely use ``apply`` in practice, took me a minute to deconstruct example. here's an example with three arguments.

```javascript
function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  }
}

var addThree = splat(function(a, b, c) { return a + b + c; });
addThree([5, 10, 15]);
console.log(sum);
//=> 30
```
→ [__apply.js__](/chapter-1/apply.js)

> __[!]__ i forgot that the first argument to ``apply`` (and ``call``) is the value of ``this`` for ``fun``. i also forgot about magical ``arguments`` object. :)


### functions as units of abstraction

> __[?]__ i'm sure it's a contrived example, but the "functional" rewrite of ``parseAge`` relying on global functions ``fail``, ``warn`` and ``note`` freaks me out. maybe this will be addressed in chapter 3 on closures for "data hiding".

### functions as units of behavior

in the comparator example, ``truthy`` and ``falsey`` are not defined. here is a complete example:

```javascript
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
  return x === y;
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
```
→ [__comparator.js__](/chapter-1/comparator.js)

> __[!]__ why does passing ``isEqual`` to ``comparator`` result in no sorting? because, ironically, when two numbers are ___not___ equal, comparator will return 0 (since first two comparisons via isEqual return false), thereby signally equality to sort. when two numbers _are_ equal, they will be swapped which is meaningless. hence no change.

---

### License
Released under the [MIT License](/LICENSE) by [Sean Omlor](http://seanomlor.com).
