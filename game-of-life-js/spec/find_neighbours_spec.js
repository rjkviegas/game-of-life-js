const { neighbour_finder_constructor } = require("../src/components/find_neighbours");

describe("find_neighbour", function () {
  describe("north", function () {
    it("for bottom left element in 2x2 grid", function () {
      const spec = { 
        grid: [["north neighbour", 0],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.north()).toEqual([0, 0]);
      expect(spec.grid[0][0]).toEqual("north neighbour");
    });
    it("for bottom right element in 2x2 grid", function () {
      const spec = {
        grid: [[0, "north neighbour"],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.north()).toEqual([0, 1]);
      expect(spec.grid[0][1]).toEqual("north neighbour");
    });
    it("returns undefined if no north neighbour exists", function () {
      const spec = {
        grid: [["cell", 0],
               [0, 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.north()).toBeUndefined();
      expect(neighbour_finder.north()).not.toBeDefined();
    });
  });
  describe("south", function () {
    it("for top left element in 2x2 grid", function () {
      const spec = {
        grid: [["cell", 0],
               ["south neighbour", 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.south()).toEqual([1, 0]);
      expect(spec.grid[1][0]).toEqual("south neighbour");
    });
    it("for top right element in 2x2 grid", function () {
      const spec = {
        grid: [[0, "cell"],
               [0, "south neighbour"]],
        x: 1,
        y: 0
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.south()).toEqual([1, 1]);
      expect(spec.grid[1][1]).toEqual("south neighbour");
    });
    it("returns undefined if no south neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.south()).toBeUndefined();
      expect(neighbour_finder.south()).not.toBeDefined();
    });
  });
  describe("east", function () {
    it("for top left element in 2x2 grid", function () {
      const spec = {
        grid: [["cell", "east neighbour"],
              [0, 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[0][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.east()).toEqual([0, 1]);
      expect(spec.grid[0][1]).toEqual("east neighbour");
    });
    it("for bottom left element in 2x2 grid", function () {
      const spec = {
        grid: [[0, 0],
                ["cell", "east neighbour"]],
        x: 0,
        y: 1
      };
      expect(spec.grid[1][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.east()).toEqual([1, 1]);
      expect(spec.grid[1][1]).toEqual("east neighbour");
    });
    it("returns undefined if no east neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor (spec);
      expect(neighbour_finder.east()).toBeUndefined();
      expect(neighbour_finder.east()).not.toBeDefined();
    });
  });
});
