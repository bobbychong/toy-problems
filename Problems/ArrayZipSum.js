function zipSum(xs, ys) {
  return xs.map((x, y)=>xs[y] + ys[y]).slice(0, Math.min(xs.length, ys.length));
};

//Input
// xs: [ 10, 20, 30 ]
// ys: [ 1, 2 ]
//
// Output
// [ 11, 22 ]
