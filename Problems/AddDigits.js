var addDigits = function (num) {
  var temp = num;

  while (temp > 9) {
    var str = temp.toString();
    temp = 0;

    for (var j = 0; j < str.length; j++) {
      temp = temp + parseInt(str[j]);
    }
  }

  return temp;
};

// Given a non-negative integer num, repeatedly add all its digits until the result
// has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only
// one digit, return it.
