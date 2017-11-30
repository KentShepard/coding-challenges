// Problem statement can be found on CodeWars at https://www.codewars.com/kata/simple-fun-number-337-the-original-number/train/javascript

function originalNumbers(s) {
  let numLength = {
    3: ['ONE', 'TWO', 'THREE'],
    4: ['ZERO', 'FOUR', 'FIVE', 'NINE'],
    5: ['THREE', 'SEVEN', 'EIGHT']
  }

  let numbers = {
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
  // create object variable for letter count storage
  let letterCount = {};

  // loop through string
  for (let i = 0; i < s.length - 1; i++) {
    // letter count equals count++ or set to 1
    letterCount[s.charAt(i)] = letterCount[s.charAt(i)]++ || 1;
  }
  return letterCount
}

let string = "OONETW";

console.log(originalNumbers(string));