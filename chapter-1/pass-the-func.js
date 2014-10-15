function note(message) {
  console.log(message);
}

function prettyNumber(n) {
  return 'Hello, I am the number ' + n;
}

[1, 2, 3].map(prettyNumber)
         .forEach(note);

//=> Hello, I am the number 1
//=> Hello, I am the number 2
//=> Hello, I am the number 3
