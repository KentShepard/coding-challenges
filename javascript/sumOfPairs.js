// Find a pair of integers in a given array that equal a given sum
// Link: https://www.codewars.com/kata/sum-of-pairs/train/javascript

var findPair = function (nums, target) {
  var storage = new Set();
  var numberNeeded;

  for (var i = 0; i < nums.length; i++) {
    numberNeeded = target - nums[i];
    if (storage.has(numberNeeded)) {
      return [numberNeeded, nums[i]]
    }
    storage.add(nums[i]);
  }

  return undefined;
};

// If array is sorted
var findPair = function (array, sum) {
  var min = 0;
  var max = array.length - 1;
  var currentSum;

  while (min !== max) {
    currentSum = array[min] + array[max];
    if (currentSum === sum) {
      return [array[min], array[max]];
    } else if (currentSum > sum) {
      max--;
    } else if (currentSum < sum) {
      min++;
    }
  }
  return null;
}

// https://leetcode.com/problems/two-sum/description/
var twoSum = function (nums, target) {
  var storage = {};
  var numberNeeded;

  for (var i = 0; i < nums.length; i++) {
    numberNeeded = target - nums[i];
    if (storage[numberNeeded] !== undefined) {
      return [storage[numberNeeded], i]
    }
    storage[nums[i]] = i;
  }

  return undefined;
};
