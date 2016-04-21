function robotPaths(n) {
  var board = makeBoard(n);
  var count = 0;

  var recurse = function (x, y) {
    board.togglePiece(x, y);
    if (x === n - 1 && y == n - 1) {
      count++;
      return;
    }

    if (x + 1 < n && !board[x + 1][y]) {
      recurse(x + 1, y);
      board.togglePiece(x + 1, y);
    }

    if (y + 1 < n && !board[x][y + 1]) {
      recurse(x, y + 1);
      board.togglePiece(x, y + 1);
    }

    if (x - 1 >= 0 && !board[x - 1][y]) {
      recurse(x - 1, y);
      board.togglePiece(x - 1, y);
    }

    if (y - 1 >= 0 && !board[x][y - 1]) {
      recurse(x, y - 1);
      board.togglePiece(x, y - 1);
    }

  };

  recurse(0, 0);
  return count;
}

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };

  return board;
}

// You are given a square board of length and height n.  Compute all possible paths
// to go from top right corner to bottom left corner.
