const { is_alive } = require("../src/components/is_alive");

describe("is_alive", function () {
  describe("checks if value is 1", function () {
    it("returns true when grid element is 1", function () {
      const grid = [[1, 0], [0, 0]];
      expect(is_alive(grid, 0, 0)).toBeTrue();
    });
  });
});
