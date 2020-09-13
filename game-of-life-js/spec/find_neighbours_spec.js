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
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 0 };
      expect(neighbour_finder.north()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north neighbour");
    });
    it("for bottom right element in 2x2 grid", function () {
      const spec = {
        grid: [[0, "north neighbour"],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 1 };
      expect(neighbour_finder.north()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north neighbour");
    });
    it("returns undefined if no north neighbour exists", function () {
      const spec = {
        grid: [["cell", 0],
               [0, 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
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
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 0 };
      expect(neighbour_finder.south()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("south neighbour");
    });
    it("for top right element in 2x2 grid", function () {
      const spec = {
        grid: [[0, "cell"],
               [0, "south neighbour"]],
        x: 1,
        y: 0
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 1 };
      expect(neighbour_finder.south()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("south neighbour");
    });
    it("returns undefined if no south neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
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
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 1 };
      expect(neighbour_finder.east()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("east neighbour");
    });
    it("for bottom left element in 2x2 grid", function () {
      const spec = {
        grid: [[0, 0],
               ["cell", "east neighbour"]],
        x: 0,
        y: 1
      };
      expect(spec.grid[1][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 1 };
      expect(neighbour_finder.east()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("east neighbour");
    });
    it("returns undefined if no east neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[spec.y][spec.x]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.east()).toBeUndefined();
      expect(neighbour_finder.east()).not.toBeDefined();
    });
  });
  describe("west", function () {
    it("for top right element in 2x2 grid", function () {
      const spec = {
        grid: [["west neighbour", "cell"],
               [0, 0]],
        x: 1,
        y: 0
      };
      expect(spec.grid[0][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 0 };
      expect(neighbour_finder.west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("west neighbour");
    });
    it("for bottom right element in 2x2 grid", function () {
      const spec = {
        grid: [[0, 0],
               ["west neighbour", "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 0 };
      expect(neighbour_finder.west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("west neighbour");
    });
    it("returns undefined if no west neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[1][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.west()).toBeUndefined();
      expect(neighbour_finder.west()).not.toBeDefined();
    });
  });
  describe("north_east", function () {
    it("for bottom left in 2x2 grid", function () {
      const spec = {
        grid: [[0, "north east neighbour"],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[1][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 1 };
      expect(neighbour_finder.north_east()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north east neighbour");
    });
    it("for center cell in 3x3 grid", function () {
      const spec = {
        grid: [[0, 0, "north east neighbour"],
               [0, "cell", 0],
               [0, 0, 0]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 2 };
      expect(neighbour_finder.north_east()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north east neighbour");
    });
    it("returns undefined if no north east neighbour exists", function () {
      const spec = {
        grid: [[0, 0, 0],
               [0, 0, "cell"],
               [0, 0, 0]],
        x: 2,
        y: 1
      };
      expect(spec.grid[1][2]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.north_east()).toBeUndefined();
      expect(neighbour_finder.north_east()).not.toBeDefined()
    });
    it("returns undefined if no north east neighbour exists", function () {
      const spec = {
        grid: [[0, "cell", 0],
               [0, 0, 0],
               [0, 0, 0]],
        x: 1,
        y: 0
      };
      expect(spec.grid[0][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.north_east()).toBeUndefined();
      expect(neighbour_finder.north_east()).not.toBeDefined()
    });
  });
  describe("south_east", function() {
    it("for top left cell of 2x2 grid", function () {
      const spec = {
        grid: [["cell", 0],
               [0, "south east neighbour"]],
        x: 0,
        y: 0
      };
      expect(spec.grid[0][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 1 };
      expect(neighbour_finder.south_east()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("south east neighbour");
    });
    it("returns undefined if no south east neighbour exists", function () {
      const spec = {
        grid: [[0, 0, 0],
               [0, 0, "cell"],
               [0, 0, 0]],
        x: 2,
        y: 1
      };
      expect(spec.grid[1][2]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.south_east()).toBeUndefined();
      expect(neighbour_finder.south_east()).not.toBeDefined();
    });
    it("returns undefined if no south east neighbour exists", function () {
      const spec = {
        grid: [[0, 0, 0],
               [0, 0, 0],
               [0, "cell", 0]],
        x: 1,
        y: 2
      };
      expect(spec.grid[2][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.south_east()).toBeUndefined();
      expect(neighbour_finder.south_east()).not.toBeDefined();
    });
  });
  describe("south_west", function () {
    it("for top right cell in 2x2 grid", function () {
      const spec = {
        grid: [[0, "cell"],
               ["south west neighbour", 0]],
        x: 1,
        y: 0
      };
      expect(spec.grid[0][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 0 };
      expect(neighbour_finder.south_west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("south west neighbour");
    });
    it("for center cell of 3x3 grid", function () {
      const spec = {
        grid: [[0, 0, 0],
               [0, "cell", 0],
               ["south west neighbour", 0, 0]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 2, x: 0 };
      expect(neighbour_finder.south_west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("south west neighbour");
    });
    it("returns undefined if no south west neighbour exists", function () {
      const spec = {
        grid: [["cell", 0],
               [0, 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[0][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.south_west()).toBeUndefined();
      expect(neighbour_finder.south_west()).not.toBeDefined();
    });
    it("returns undefined if no south west neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.south_west()).toBeUndefined();
      expect(neighbour_finder.south_west()).not.toBeDefined();
    });
  });
  describe("north_west", function () {
    it("for top right cell in 2x2 grid", function () {
      const spec = {
        grid: [["north west neighbour", 0],
               [0, "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 0, x: 0 };
      expect(neighbour_finder.north_west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north west neighbour");
    });
    it("for bottom right cell in 3x3 grid", function () {
      const spec = {
        grid: [[0, 0, 0],
               [0, "north west neighbour", 0],
               [0, 0, "cell"]],
        x: 2,
        y: 2
      };
      expect(spec.grid[2][2]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const coordinates = { y: 1, x: 1 };
      expect(neighbour_finder.north_west()).toEqual(coordinates);
      expect(spec.grid[coordinates.y][coordinates.x]).toEqual("north west neighbour");
    });
    it("returns undefined if no north west neighbour exists", function () {
      const spec = {
        grid: [[0, "cell"],
               [0, 0]],
        x: 0,
        y: 0
      };
      expect(spec.grid[0][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.north_west()).toBeUndefined();
      expect(neighbour_finder.north_west()).not.toBeDefined();
    });
    it("returns undefined if no north west neighbour exists", function () {
      const spec = {
        grid: [[0, 0],
               ["cell", 0]],
        x: 0,
        y: 1
      };
      expect(spec.grid[1][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      expect(neighbour_finder.north_west()).toBeUndefined();
      expect(neighbour_finder.north_west()).not.toBeDefined();
    });
  });
  describe("all", function () {
    it("for 1x1 grid", function () {
      const spec = {
        grid: [["cell"]],
        x: 0,
        y: 0
      };
      expect(spec.grid[0][0]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const neighbours = {};
      expect(neighbour_finder.all()).toEqual(neighbours)
    });
    it("for top right cell in a 2x2 grid", function () {
      const spec = {
        grid: [["west neighbour", "cell"],
               ["south west neighbour", "south neighbour"]],
        x: 1,
        y: 0
      };
      expect(spec.grid[0][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const neighbours = {
        south: { y: 1, x: 1 },
        south_west: { y: 1, x: 0 },
        west: { y: 0, x: 0 },
      };
      expect(neighbour_finder.all()).toEqual(neighbours)
    });
    it("for bottom right cell in 2x2 grid", function () {
      const spec = {
        grid: [["north west neighbour", "north neighbour"],
               ["west neighbour", "cell"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const neighbours = {
        north: { y: 0, x: 1 },
        west: {y: 1, x: 0 },
        north_west: { y: 0, x: 0 }
      };
      expect(neighbour_finder.all()).toEqual(neighbours)
    });
    it("for center cell in 3x3 grid", function () {
      const spec = {
        grid: [["north west neighbour", "north neighbour", "north east neighbour"],
               ["west neighbour", "cell", "east neighbour"],
               ["south west neighbour", "south neighbour", "south east neighbour"]],
        x: 1,
        y: 1
      };
      expect(spec.grid[1][1]).toEqual("cell");
      const neighbour_finder = neighbour_finder_constructor(spec);
      const neighbours = {
        north: { y: 0, x: 1 },
        north_east: { y: 0, x: 2 },
        east: { y: 1, x: 2 },
        south_east: { y: 2, x: 2 },
        south: { y: 2, x: 1 },
        south_west: { y: 2, x: 0 },
        west: { y: 1, x: 0 },
        north_west: { y: 0, x: 0 }
      };
      expect(neighbour_finder.all()).toEqual(neighbours)
    });
  });
});
