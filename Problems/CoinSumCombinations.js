function coinSums(total) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var combo = 0;

  var recurse = function (sum, index) {
    if (sum === total) {
      combo++;
      return;
    } else if (sum > total) {
      return;
    }

    for (var j = index; j < coins.length; j++) {
      recurse(sum + coins[j], j);
    }
  };

  recurse(0, 0);
  return combo;
}

// Given a given number of pence, return the possible number of ways
// someone could make change.
// It is possible to make 5 pence in the following ways:
//
// 5 * 1p
// 3 * 1p + 1 * 2p
// 1 * 1p + 2 * 2p
// 1 * 5p
//
// Input
// 17
// Output
// 28
