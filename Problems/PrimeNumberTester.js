function primeTester(n) {

  var sr = Math.sqrt(n);
  if (n === 1) {
    return false;
  }

  for (var i = 2; i <= sr; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test input to see if it is a prime numbers
