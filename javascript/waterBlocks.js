// https://leetcode.com/problems/trapping-rain-water/description/

var waterBlocks = function (blocks) {
  var current, left, right, maxLeft, maxRight;
  let count = 0;
  for (var i = 1; i < blocks.length - 1; i++) {
    current = blocks[i];
    left = blocks.slice(0, i);
    right = blocks.slice(i + 1);
    maxLeft = Math.max(...left);
    maxRight = Math.max(...right);
    
    if (maxLeft > current && maxRight > current) {
      count += Math.min(maxLeft, maxRight) - current;
    }
  }

  return count;  
};