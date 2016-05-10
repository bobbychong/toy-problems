var maxDepth = function (root) {
  var max = 0;

  function recurse(node, depth) {

    if (node !== null) {
      if (depth > max) {
        max = depth;
      }

      if (node.left !== null) {
        recurse(node.left, depth + 1);
      }

      if (node.right !== null) {
        recurse(node.right, depth + 1);
      }
    }
  }

  recurse(root, 1);

  return max;
};

// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.
