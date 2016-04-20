var reverse = function (x) {
  var str = x.toString();
  var sign = '';
  var result = '';

  if (str[0] === '-') {
    sign = '-';
  }

  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  result = parseInt(result);

  if (result < 2147483647) {
    if (sign === '-') {
      return result * -1;
    }

    return result;
  } else {
    return 0;
  }
};

// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321

// Keep in mind the max 32 bit integer value overflow
