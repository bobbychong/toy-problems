function characterFrequency(string) {

  var obj = {};
  var sorted = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }

  for (var key in obj) {
    result.push([key, obj[key]]);
  }

  result.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });

  return result;
}

// Write a function that takes as its input a string and returns an array of
// arrays as shown below sorted in descending order by frequency and then by
// ascending order by character.
//
// Examples
// Input
// string: "aaabbc"
// Output
// [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
