module.exports = {
  exists: function(x) {
    return x!= null;
  },

  truthy: function(x) {
    return (x !== false) && this.exists(x);
  }
}
