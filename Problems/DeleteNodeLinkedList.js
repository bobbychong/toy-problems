var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//Deletes a node from a linked list
