// ['door', 'elf', 'fish', 'ardvark', 'ball', 'car']
// returns 3

var findPivot = function (array, start, end) {
  // TODO: Implement
  let obj = {};

  array.forEach((word, i) => obj[word] = i )

  array.sort((a, b) => a > b)
  
  return obj[array[0]];
};

var findPivot = function (array, start, end) {
  // TODO: Implement
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];

    if (current > next) {
      return i + 1;
    }
  }

  return null;
};