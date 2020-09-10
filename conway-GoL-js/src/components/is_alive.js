const is_alive = function (grid, y, x) {
  return grid[y][x] == 1;
};

module.exports = { is_alive };
