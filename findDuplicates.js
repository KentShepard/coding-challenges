// Given two arrays of sorted integers, find all the pairs/common elements of integers between the two arrays

var findDuplicates = function (array1, array2) {
  let results = [];
  let obj = {};

  array1.forEach(value => {
    obj[value] = ++obj[value] || 1;
  });

  array2.forEach(value => {
    if (obj[value] > 0) {
      results.push(value);
      obj[value]--;
    }
  })
  return results;
}

// If input arrays are sorted
var findDuplicates = function (array1, array2) {
  let x = 0;
  let y = 0;
  let results = [];

  while (x < array1.length && y < array2.length) {
    if (array1[x] === array2[y]) {
      results.push(array1[x])
      x++;
      y++;
    } else if (array1[x] > array2[y]) {
      y++;
    } else if (array1[x] < array2[y]) {
      x++;
    }
  }
  return results;
} 