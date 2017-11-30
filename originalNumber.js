// Problem statement can be found on CodeWars at https://www.codewars.com/kata/simple-fun-number-337-the-original-number/train/javascript

var originalNumbers = function(s) {
  var numbers = {
    'ZERO': {'Z': 1, 'E': 1, 'R': 1, 'O': 1},
    'ONE': {'O': 1, 'N': 1, 'E': 1},
    'TWO': {'T': 1, 'W': 1, 'O': 1},
    'THREE': {'T': 1, 'H': 1, 'R': 1, 'E': 2},
    'FOUR': {'F': 1, 'O': 1, 'U': 1, 'R': 1},
    'FIVE': {'F': 1, 'I': 1, 'V': 1, 'E': 1},
    'SIX': {'S': 1, 'I': 1, 'X': 1},
    'SEVEN': {'S': 1, 'E': 2, 'V': 1, 'N': 1},
    'EIGHT': {'E': 1, 'I': 1, 'G': 1, 'H': 1, 'T': 1},
    'NINE': {'N': 2, 'I': 1, 'E': 1}
  }

  let numValues = {
    'ZERO': '0',
    'ONE': '1',
    'TWO': '2',
    'THREE': '3',
    'FOUR': '4',
    'FIVE': '5',
    'SIX': '6',
    'SEVEN': '7',
    'EIGHT': '8',
    'NINE': '9'
  }
  // create object variable for letter count storage
  var letterCount = {};
  let result = '';

  // loop through string
  for (var i = 0; i < s.length; i++) {
    // letter count equals count++ or set to 1
    if (letterCount[s.charAt(i)]) {
      letterCount[s.charAt(i)]++
    } else {
      letterCount[s.charAt(i)] = 1;
    }
  }
  
  for (var key in numbers) {
    let match = true;
    for (var letter in numbers[key]) {
      if (!letterCount[letter] || letterCount[letterCount] < numbers[key][letter]) {
        match = false;
      }
    }
    if (match) {
      result += numValues[key];
    }
  }
  return result;
}

let string = "OONETW";

console.log(originalNumbers(string));