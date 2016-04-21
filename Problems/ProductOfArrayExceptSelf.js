var productExceptSelf = function (nums) {
  var temp1 = [];
  var temp2 = [];
  var result = [];

  temp1[0] = 1;
  temp2[nums.length - 1] = 1;

  for (var j = 0; j < nums.length; j++) {
    temp1[j + 1] = temp1[j] * nums[j];
  }

  for (var k = nums.length - 1; k >= 0; k--) {
    temp2[k - 1] = temp2[k] * nums[k];
  }

  for (var z = 0; z < nums.length; z++) {
    result[z] = temp1[z] * temp2[z];
  }

  return result;
};

// Given an array of n integers where n > 1, nums, return an array output such
// that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
