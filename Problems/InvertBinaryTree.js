/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  var temp;
  function recurse(node) {
    if (node) {
      temp = node.right;
      node.right = node.left;
      node.left = temp;
      recurse(node.right);
      recurse(node.left);
    }

  }

  recurse(root);
  return root;
};

// Invert a binary tree.
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
