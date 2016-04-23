function mergeSort(arr) {

  if (arr.length == 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var rightArr = arr.slice(mid);
  var leftArr = arr.slice(0, mid);

  var merge = function (arr1, arr2) {
    var result = [];
    var combined = arr1.length + arr2.length;
    var index1 = 0;
    var index2 = 0;

    for (var i = 0; i < combined - 1; i++) {
      if (arr1[index1] !== undefined && arr1[index1] < arr2[index2] || arr2[index2] === undefined) {
        result.push(arr1[index1]);
        index1++;
      } else {
        result.push(arr2[index2]);
        index2++;
      }
    }

    return result;
  };

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// 1.Split the input array in half
//  [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
// 2.Both sides are sorted recursively:
//  [4, 7, 4] -> [4, 4, 7]
//  [3, 9, 1, 2] -> [1, 2, 3, 9]
// 3.Both halves are merged:
//  [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
