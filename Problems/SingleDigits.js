var singleNumber = function (nums) {
  var results = [];
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (var key in obj) {
    if (obj[key] === 1) {
      results.push(parseInt(key));
    }
  }

  return results;
};

// Given an array of numbers nums, in which exactly two elements appear only
// once and all the other elements appear exactly twice. Find the two elements
// that appear only once.
//
// For example:
//
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
