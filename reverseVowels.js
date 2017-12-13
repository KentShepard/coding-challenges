// Write a function that takes a string as input and reverse only the vowels of a string. 
// Example 1: Given s = "hello", return "holle". Example 2: Given s = "leetcode", return "leotcede". 
// Note: The vowels does not include the letter "y". 
// Link: https://leetcode.com/problems/reverse-vowels-of-a-string/description/

var reverseVowels = function (s) {
  s = s.split('');
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let foundVowels = [];
  let count = 0;
  let currentLetter;
  // Iterate through string
  for (let i = 0; i < s.length; i++) {
    currentLetter = s[i];
    // if vowels has letter
    if (vowels.has(currentLetter.toLowerCase())) {
      //push to foundVowels
      foundVowels.push(currentLetter)
      //increment count
      count++
    }
  }
  
  // Iterate through string again
  for (let i = 0; i < s.length; i++) {
    currentLetter = s[i];
    // if vowels has letter
    if (vowels.has(currentLetter.toLowerCase())) {
      //replace character with last index letter of foundVowels
      s[i] = foundVowels[count - 1]
      //decrement count
      count--
    }
  }

  return s.join('');
}

var string = 'supercalifragilisticexpialidocious'

console.log(reverseVowels(string));