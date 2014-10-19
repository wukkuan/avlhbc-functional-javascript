var _ = require('../lib/underscore');

// naive
function pluralize(word, count) {
  return (count === 1) ? word : word + 's';
}

function pluralizer(singular, plural) {
  return function(word, count) {
    return (count === 1) ? singular : plural;
  }
}

function lyricSegment(n) {
  var bottles = function(count) {
    if (count > 0) {
      return count + ' ' + pluralizer('bottle', 'bottles')(count);
    } else {
      return 'No more bottles';
    }
  }

  return _.chain([])
          .push(bottles(n) + ' of beer on the wall')
          .push(bottles(n) + ' of beer')
          .push('Take one down, pass it around')
          .push(bottles(n - 1) + ' of beer on the wall')
          .value();
}

console.log(lyricSegment(5));
//=> [ '5 bottles of beer on the wall',
//=>   '5 bottles of beer',
//=>   'Take one down, pass it around',
//=>   '4 bottles of beer on the wall' ]

console.log(lyricSegment(1));
//=> [ '1 bottles of beer on the wall',
//=>   '1 bottles of beer',
//=>   'Take one down, pass it around',
//=>   'No more bottles of beer on the wall' ]

function songLyrics(start, end, lyricGen) {
  return _.reduce(_.range(start, end, -1), function(lyrics, n) {
    return lyrics.concat(lyricGen(n));
  }, []);
}

var lyrics = songLyrics(3, 0, lyricSegment);
console.log(lyrics);
//=> [ '3 bottles of beer on the wall',
//=>   '3 bottles of beer',
//=>   'Take one down, pass it around',
//=>   '2 bottles of beer on the wall',
//=>   '2 bottles of beer on the wall',
//=>   '2 bottles of beer',
//=>   'Take one down, pass it around',
//=>   '1 bottles of beer on the wall',
//=>   '1 bottles of beer on the wall',
//=>   '1 bottles of beer',
//=>   'Take one down, pass it around',
//=>   'No more bottles of beer on the wall' ]
