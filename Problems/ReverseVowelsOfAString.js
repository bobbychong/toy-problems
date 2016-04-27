var reverseVowels = function (s) {
  var vowel = [];
  var result = '';

  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'A') {
      vowel.push(s[i]);
    } else if (s[i] === 'e' || s[i] === 'E') {
      vowel.push(s[i]);
    } else if (s[i] === 'i' || s[i] === 'I') {
      vowel.push(s[i]);
    } else if (s[i] === 'o' || s[i] === 'O') {
      vowel.push(s[i]);
    } else if (s[i] === 'u' || s[i] === 'U') {
      vowel.push(s[i]);
    }
  }

  var indv = vowel.length - 1;

  for (var j = 0; j < s.length; j++) {
    if (s[j] === 'a' || s[j] === 'A') {
      result = result + vowel[indv];
      indv--;
    } else if (s[j] === 'e' || s[j] === 'E') {
      result = result + vowel[indv];
      indv--;
    } else if (s[j] === 'i' || s[j] === 'I') {
      result = result + vowel[indv];
      indv--;
    } else if (s[j] === 'o' || s[j] === 'O') {
      result = result + vowel[indv];
      indv--;
    } else if (s[j] === 'u' || s[j] === 'U') {
      result = result + vowel[indv];
      indv--;
    } else {
      result = result + s[j];
    }
  }

  return result;
};

// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
