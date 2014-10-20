var _ = require('./underscore');

var h = {
  exists: function(x) {
    return x!= null;
  },

  truthy: function(x) {
    if (_.isFunction(x)) return x();
    return (x !== false) && h.exists(x);
  }
}

module.exports = h;
