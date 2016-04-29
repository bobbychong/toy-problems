var reverseString = function (s) {
  var result = '';
  for (var i = s.length - 1; i >= 0; i--) {
    result = result + s[i];
  }

  return result;
};

// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".
