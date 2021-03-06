var twoSum = function (nums, target) {
  var results = [];
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = i;
    }
  }

  for (var j = 0; j < nums.length; j++) {
    if (obj[target - nums[j]] && j !== obj[target - nums[j]]) {
      results.push(j);
      results.push(obj[target - nums[j]]);
      return results;
    }
  }
};

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.
//
// You may assume that each input would have exactly one solution.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
