var isPowerOfThree = function (n) {
  var pow = 7;
  while (pow > 1) {
    if (n % Math.pow(3, pow) === 0) {
      n = n / Math.pow(3, pow);
    }

    pow--;
  }

  if (n === 1 || n === 3) {
    return true;
  } else if (n === 0) {
    return false;
  } else {
    return false;
  }
};

// Given an integer, write a function to determine if it is a power of three.
