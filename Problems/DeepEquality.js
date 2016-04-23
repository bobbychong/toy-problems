deepEquals = function (a, b) {
  var flag = true;
  var recurse = function (x, y) {

    if (typeof x !== 'object' && typeof y !== 'object') {
      if (x !== y) {
        flag = false;
      }

      return;
    }

    for (var key in x) {
      recurse(x[key], y[key]);
    }

  };

  recurse(a, b);
  recurse(b, a);
  return flag;
};

// Write a function that, given two objects, returns whether or not the two
// are deeply equivalent–meaning the structure of the two objects is the same,
// and so is the structure of each of their corresponding descendants.
//
// DO NOT use JSON.stringify.
//
// var a = { foo: 1 };
// var b = { foo: '1' };
// deepEquals(a,b).should.be.false;
//
// var a = { foo: 'bar' };
// var b = { foo: 'bar' };
// deepEquals(a, b).should.be.true;
