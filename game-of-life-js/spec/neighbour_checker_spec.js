const { neighbour_checker_constructor } = require("../src/components/neighbour_checker");

describe("neighbour_checker", function () {
  describe("total_alive", function () {
    it("returns 0 when no alive neighbours exist for 2x2 grid", function () {
      const grid = [[0, 0],
                    [0, "cell"]];
      spec = {
        grid,
        y: 1,
        x: 1
      };
      const neighbour_checker = neighbour_checker_constructor(spec);
      expect(neighbour_checker.total_alive()).toEqual(0);
    });
    it("returns 1 when one alive neighbour exists for 2x2 grid", function () {
      const grid = [[1, 0],
                    [0, "cell"]];
      spec = {
        grid,
        y: 1,
        x: 1
      };
      const neighbour_checker = neighbour_checker_constructor(spec);
      expect(neighbour_checker.total_alive()).toEqual(1);
    });
    it("returns 3 when 3 alive neighbours exist for 2x2 grid", function () {
      const grid = [[1, 1],
                    [1, "cell"]];
      spec = {
        grid,
        y: 1,
        x: 1
      };
      const neighbour_checker = neighbour_checker_constructor(spec);
      expect(neighbour_checker.total_alive()).toEqual(3);
    });
  });
});
