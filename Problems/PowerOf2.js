var isPowerOfTwo = function (n) {
  var pow = 9;
  while (pow > 1) {
    if (n % Math.pow(2, pow) === 0) {
      n = n / Math.pow(2, pow);
    }

    pow--;
  }

  if (n === 2 || n === 1) {
    return true;
  } else if (n === 0) {
    return false;
  } else {
    return false;
  }
};

// Given an integer, write a function to determine if it is a power of two.
