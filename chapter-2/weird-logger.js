function weirdLogger() {
  return function(message) {
    console.log('weird!', message);
  }
}
var logger = weirdLogger();
logger('is this thing on?');
//=> weird! is this thing on?
