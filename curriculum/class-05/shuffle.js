'use strict';

this.shuffle = function() {
  var copy = [], n = this.cards.length, i, take; // 6

//while there remain elements to shuffle..

  while (n) { //n
  // Pick a remaining element…
    rand = Math.floor(Math.random() * n--); //( 4

    // And move it to the new array.
    take = this.cards.splice(rand, 1)[0] // n/2
    copy.push(take); // 1
  }
  this.cards = copy; // 1
};

// 6 + n * ( 4 + 1 + n/2 ) + 1
// 6 + 5n + n^2/2 + 1
//7 + 5n + n^2/2 - polynomial

// O(n^2)