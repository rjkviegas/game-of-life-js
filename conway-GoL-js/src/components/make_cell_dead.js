const make_cell_dead = function (grid, y, x) {
  grid[y][x] = 0;
};

module.exports = { make_cell_dead };