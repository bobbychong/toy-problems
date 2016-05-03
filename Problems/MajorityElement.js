var majorityElement = function (nums) {
  var index = 0;
  var max = 0;
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (var key in obj) {
    if (obj[key] > max) {
      index = key;
      max = obj[key];
    }
  }

  return parseInt(index);
};

// Given an array of size n, find the majority element. The majority element is
// the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
