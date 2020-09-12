const { game_constructor } = require("../src/game.js");

describe("game", function () {
  describe("1 tick", function () {
    it("for live cell in 1x1 grid", function () {
      const grid = ([[1]]);
      let game = game_constructor(grid);
      game.tick();
      expect(grid[0][0]).toEqual(0);
    });
  });
});