var isAnagram = function (s, t) {
  var sobj = {};
  var tobj = {};

  if (s.length !== t.length) {
    return false;
  } else {
    for (var i = 0; i < s.length; i++) {
      if (!sobj[s[i]]) {
        sobj[s[i]] = 1;
      }
      if (!tobj[t[i]]) {
        tobj[t[i]] = 1;
      }
      if (sobj[s[i]]) {
        sobj[s[i]]++;
      }
      if (tobj[t[i]]) {
        tobj[t[i]]++;
      }
    }

    for (var key in sobj) {
      if (sobj[key] !== tobj[key]) {
        return false;
      }
    }
  }

  return true;
};

//Checks two input strings to see fit hey are anagrams of each other
