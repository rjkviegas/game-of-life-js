const { status_changer_constructor } = require("../src/components/status_changer")

describe("status_changer", function () {
  describe("make_alive", function () {
    it("for top left cell of 2x2", function () {
      const grid = [[0, 5],
                    [5, 5]];
      const spec = {
        grid,
        y: 0,
        x: 0
      };
      const status_changer = status_changer_constructor(spec);
      expect(grid[0][0]).toEqual(0);
      status_changer.make_alive();
      expect(grid[0][0]).toEqual(1);
      expect(grid[0][0]).not.toEqual(0);
    });
  });
  describe("make_cell_dead", function () {
    it("for bottom right cell of 2x2 grid", function () {
      const grid = [[5, 5], 
                    [5, 1]];
      const spec = {
        grid,
        y: 1,
        x: 1
      };
      const status_changer = status_changer_constructor(spec);
      expect(grid[1][1]).toEqual(1);
      status_changer.make_dead();
      expect(grid[1][1]).toEqual(0);
      expect(grid[1][1]).not.toEqual(1);
    });
  });
});

