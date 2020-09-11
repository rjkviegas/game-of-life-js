const { find_north_neighbour, find_south_neighbour } = require("../src/components/find_neighbours");

describe("find_north_neighbour", function () {
  describe("returns co-ordinate of grid element directly above", function () {
    it("for bottom left element in 2x2 grid", function () {
      const grid = [
        [2, 0],
        [1, 0]
      ];
      expect(grid[1][0]).toEqual(1);
      expect(find_north_neighbour(grid, 1, 0)).toEqual([0, 0]);
      expect(grid[0][0]).toEqual(2);
    });
    it("for bottom right element in 2x2 grid", function () {
      const grid = [
        [0, 2],
        [0, 1]
      ];
      expect(grid[1][1]).toEqual(1);
      expect(find_north_neighbour(grid, 1, 1)).toEqual([0, 1]);
      expect(grid[0][1]).toEqual(2);
    });
    it("returns undefined if no north neighbour exists", function () {
      const grid = [
        [1, 0],
        [0, 0]
      ];
      expect(grid[0][0]).toEqual(1);
      expect(find_north_neighbour(grid, 0, 0)).toBeUndefined();
      expect(find_north_neighbour(grid, 0, 0)).not.toBeDefined();
    });
  });
});
describe("find_south_neighbour", function () {
  describe("returns co-ordinate of grid element directly below", function () {
    it("for top left element in 2x2 grid", function () {
      const grid = [
        [1, 0],
        [2, 0]
      ];
      expect(grid[0][0]).toEqual(1);
      expect(find_south_neighbour(grid, 0, 0)).toEqual([1, 0]);
      expect(grid[1][0]).toEqual(2);
    });
    it("for top right element in 2x2 grid", function () {
      const grid = [
        [0, 1],
        [0, 2]
      ];
      expect(grid[0][1]);
      expect(find_south_neighbour(grid, 0, 1)).toEqual([1, 1]);
      expect(grid[1][1]).toEqual(2);
    });
    it("returns undefined if no south neighbour exists", function () {
      const grid = [
        [0, 0],
        [1, 0]
      ];
      expect(grid[1][0]).toEqual(1);
      expect(find_south_neighbour(grid, 1, 0)).toBeUndefined();
      expect(find_south_neighbour(grid, 1, 0)).not.toBeDefined();
    });
  });
});
