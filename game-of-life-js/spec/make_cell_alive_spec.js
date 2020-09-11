const { make_cell_alive } = require("../src/components/make_cell_alive")

describe("make_cell_alive", function () {
  describe("change value from 0 to 1", function () {
    it("for grid[0][0] when it receives grid, 0, 0", function () {
      const grid = [[0, 0], [0, 0]];
      make_cell_alive(grid, 0, 0);
      expect(grid[0][0]).toEqual(1);
      expect(grid[0][0]).not.toEqual(0);
    });
  });
});