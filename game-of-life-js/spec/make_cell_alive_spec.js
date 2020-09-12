const { status_changer_constructor } = require("../src/components/make_cell_alive")

describe("status_changer", function () {
  describe("make_alive", function () {
    it("for top left cell of 2x2", function () {
      const grid = [[0, 0],
                    [0, 0]];
      const spec = {
        grid,
        y: 0,
        x: 0
      };
      const status_changer = status_changer_constructor(spec);
      status_changer.make_alive();
      expect(grid[0][0]).toEqual(1);
      expect(grid[0][0]).not.toEqual(0);
    });
  });
});