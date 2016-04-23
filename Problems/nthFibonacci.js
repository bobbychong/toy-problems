nthFibonacci = function (n) {
  var arr = [];
  arr[0] = 0;
  arr[1] = 1;

  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
};

// return the nth value of the ficonacci sequence
