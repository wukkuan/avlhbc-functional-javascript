## Things of Interest
### Definition of Applicative
A function that takes another function as an argument and applies it to some
process.

## Errors
### Page 32
The book references [this code](http://jsbin.com/xemiko/4/edit?js,console):

    var bFunc = function () { return this };
    var b = {name: "b", fun: bFunc};
    b.fun();

It then says that b.fun() returns the global object. This isn't true. Calling a
function that will always results in `this` referencing the object containing
the function.

If I were to instead end with [this
code](http://jsbin.com/xemiko/5/edit?js,console), it would work the way the
book describes.

    var f = b.fun;
    f();

