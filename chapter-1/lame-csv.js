var _ = require('../lib/underscore');

function lameCSV(str) {
  var rows = str.split('\n');

  return _.reduce(rows, function(table, row) {
    var cols = row.split(',');

    table.push(_.map(cols, function(c) {
      return c.trim();
    }));

    return table;
  }, []);
}

var frameworks = 'framework, language, age\n ' +
                 'rails, ruby, 10\n' +
                 'node.js, javascript, 5\n' +
                 'phoenix, elixir, 1';

var table = lameCSV(frameworks);
console.log(table);
//=> [ [ 'framework', 'language', 'age' ],
//=>   [ 'rails', 'ruby', '10' ],
//=>   [ 'node.js', 'javascript', '5' ],
//=>   [ 'phoenix', 'elixir', '1' ] ]

var sorted = _.rest(table).sort();
console.log(sorted);
//=> [ [ 'node.js', 'javascript', '5' ],
//=>   [ 'phoenix', 'elixir', '1' ],
//=>   [ 'rails', 'ruby', '10' ] ]

function selectFrameworks(table) {
  return _.rest(_.map(table, _.first));
}

var frameworkNames = selectFrameworks(table);
console.log(frameworkNames);
//=> [ 'rails', 'node.js', 'phoenix' ]

// more verbose version
function selectFrameworks(table) {
  var firstCol = _.map(table, function(row) {
    return _.first(row);
  });

  return _.rest(firstCol);
}

var frameworkNames = selectFrameworks(table);
console.log(frameworkNames);
//=> [ 'rails', 'node.js', 'phoenix' ]

function nth(a, index) {
  // lazy version
  return a[index];
}

function second(a) {
  return nth(a, 1);
}

function selectColumn(table, colNum) {
  colNum--; // expects 1-based index
  return _.map(table, function(row) {
    return nth(row, colNum);
  });
}

var col1 = selectColumn(table, 1);
console.log(col1);
//=> [ 'framework', 'rails', 'node.js', 'phoenix' ]
