function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var neg = 0;
  var pos = 0;
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    } else {
      zero++;
    }
  }

  console.log(parseFloat(pos / arr.length).toFixed(6));
  console.log(parseFloat(neg / arr.length).toFixed(6));
  console.log(parseFloat(zero / arr.length).toFixed(6));
}

// Given an array of integers, calculate which fraction of its elements are positive,
// which fraction of its elements are negative, and which fraction of its elements are zeroes,
// respectively. Print the decimal value of each fraction on a new line.
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal
// places, though answers with absolute error of up to 10−410−4 are acceptable.
//
// Input Format
//
// The first line contains an integer, NN, denoting the size of the array.
// The second line contains NN space-separated integers describing an array of numbers
// (a0,a1,a2,…,an−1)(a0,a1,a2,…,an−1).
//
// Output Format
//
// You must print the following 33 lines:
//
// A decimal representing of the fraction of positive numbers in the array.
// A decimal representing of the fraction of negative numbers in the array.
// A decimal representing of the fraction of zeroes in the array.
// Sample Input
//
// 6
// -4 3 -9 0 4 1
// Sample Output
//
// 0.500000
// 0.333333
// 0.166667
