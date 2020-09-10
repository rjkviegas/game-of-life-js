const { find_north_neighbour } = require("../src/components/find_neighbours");

describe("find_north_neighbour", function () {
  describe("returns co-ordinate of grid element directly above", function () {
    it("for bottom left element in 2x2 grid", function () {
      const grid = [[0, 0], [1, 0]];
      expect(find_north_neighbour(grid, 1, 0)).toEqual([0, 0]);
    });
    it("for bottom right element in 2x2 grid", function () {
      const grid = [[0, 0], [0, 1]];
      expect(find_north_neighbour(grid, 1, 1)).toEqual([0, 1]);
    });
    it("returns undefined if no north neighbour exists", function () {
      const grid = [[0, 0], [0, 0]];
      expect(find_north_neighbour(grid, 0, 0)).toBeUndefined();
      expect(find_north_neighbour(grid, 0, 0)).not.toBeDefined();
    });
  });
});
