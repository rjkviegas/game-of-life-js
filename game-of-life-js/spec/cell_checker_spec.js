const { cell_checker_constructor } = require("../src/components/is_alive");

describe("cell_checker", function () {
  describe("is_alive", function () {
    it("returns true when grid element is 1", function () {
      const spec = {
        grid: [[1, 0],
               [0, 0]],
        y: 0,
        x: 0
        };
      const cell_checker = cell_checker_constructor(spec);
      expect(cell_checker.is_alive()).toBeTrue();
    });
    it("returns false when grid element is 0", function () {
      const spec = {
        grid: [[0, 1],
               [1, 1]],
        y: 0,
        x: 0
      };
      const cell_checker = cell_checker_constructor(spec);
      expect(cell_checker.is_alive()).toBeFalse();
    });
  });
  describe("is_dead", function () {
    it("returns true when grid element is 0", function () {
      const spec = {
        grid: [[0, 1],
               [1, 1]],
        y: 0,
        x: 0
      };
      const cell_checker = cell_checker_constructor(spec);
      expect(cell_checker.is_dead()).toBeTrue();
    });
    it("returns false when grid element is 1", function () {
      const spec = {
      grid: [[1, 0], 
             [0, 0]],
      y: 0,
      x: 0
      };
      const cell_checker = cell_checker_constructor(spec);
      expect(cell_checker.is_dead()).toBeFalse();
    });
  });
});
