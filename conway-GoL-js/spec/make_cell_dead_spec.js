const { make_cell_dead } = require("../src/make_cell_dead")

describe('make_cell_dead', function() {
  describe('change value from 1 to 0', function() {
    it('for grid[0][0] when it receives grid, 0, 0', function() {
      const grid = [[1, 1], [1, 1]];
      make_cell_dead(grid, 0, 0);
      expect(grid[0][0]).toEqual(0);
      expect(grid[0][0]).not.toEqual(1);
    });
  });
});