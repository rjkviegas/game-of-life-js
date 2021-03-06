const { create_grid } = require("../src/components/create_grid");

describe("create_grid", function () {
  describe("returns a 0 filled 2D array", function () {
    it("that is 2 columns by 2 rows when it receives 2 and 2",function () {
      expect(create_grid(2, 2)).toEqual([[0, 0], [0, 0]]);
    });
    it("that is 3 columns by 3 rows when it receives 3 and 3",function () {
      expect(create_grid(3, 3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
    it("that is 3 columns by 2 rows when it receives 3 and 2",function () {
      expect(create_grid(3, 2)).toEqual([[0, 0, 0,], [0, 0, 0]]);
    });
  })
});

