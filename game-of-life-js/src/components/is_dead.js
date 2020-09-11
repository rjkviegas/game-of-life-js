const is_dead = function (grid, y, x) {
  return grid[y][x] === 0
};

module.exports = { is_dead };