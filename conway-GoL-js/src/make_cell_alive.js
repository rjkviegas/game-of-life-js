const make_cell_alive = function(grid, y, x) {
  grid[y][x] = 1;
}

module.exports = { make_cell_alive };
