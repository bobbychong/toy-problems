var moveZeroes = function (nums) {
  var zeroes = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      var num = nums.splice(i, 1);
      zeroes.push(num[0]);
      i--;
    }
  }

  for (var j = 0; j < zeroes.length; j++) {
    nums.push(zeroes[j]);
  }

};

//Move all zeroes within an array to the end
//[0, 1, 0, 3, 12] -->  [1, 3, 12, 0, 0]
