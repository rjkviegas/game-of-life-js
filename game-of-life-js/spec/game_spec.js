const { game_constructor } = require("../src/game.js");

describe("game", function () {
  describe("1 tick", function () {
    it("for live cell in 1x1 grid", function () {
      const grid = ([[1]]);
      let game = game_constructor(grid);
      expect(grid[0][0]).toEqual(1);
      game.tick();
      expect(grid[0][0]).toEqual(0);
    });
    it("for live bottom right cell in 2x2 grid", function () {
      const grid = (
        [[0, 0],
         [0, 1]]
        );
      let game = game_constructor(grid);
      expect(grid[1][1]).toEqual(1);
      game.tick();
      expect(grid[1][1]).toEqual(0);
    });
    it("for live top right and bottom right cells in 2x2 grid", function () {
      const grid = (
        [[0, 1],
         [0, 1]]
        );
      let game = game_constructor(grid);
      expect(grid[0][1]).toEqual(1);
      expect(grid[1][1]).toEqual(1);
      game.tick();
      expect(grid[0][0]).toEqual(0);
      expect(grid[0][1]).toEqual(0);
      expect(grid[1][0]).toEqual(0);
      expect(grid[1][1]).toEqual(0);
    });
    it("for live center cell in 3x3 grid", function () {
      const grid = (
        [[0, 0, 0],
         [0, 1, 0],
         [0, 0, 0]]
        );
      let game = game_constructor(grid);
      expect(grid[1][1]).toEqual(1);
      game.tick();
      expect(grid[1][1]).toEqual(0);
    });
    it("for bottom right dead cell in 2x2 grid", function () {
      const grid = (
        [[1, 1],
         [0, 1]]
        );
      let game = game_constructor(grid);
      expect(grid[1][0]).toEqual(0);
      game.tick();
      expect(grid[1][0]).toEqual(1);
    });
    it("for 3x3 grid", function () {
      const grid = (
        [[0, 1, 0],
         [1, 0, 1],
         [0, 1, 0]]
        );
      let game = game_constructor(grid);
      expect(grid[1][1]).toEqual(0);
      game.tick();
      expect(grid[1][1]).toEqual(0);
      expect(grid).toEqual(
        [[0, 1, 0],
         [1, 0, 1],
         [0, 1, 0]]
      );
    });
    describe("2 ticks", function () {
      it("for 3x3 grid", function () {
        const grid = (
          [[0, 1, 0],
           [1, 1, 1],
           [0, 1, 0]]
          );
        let game = game_constructor(grid);
        expect(grid[1][1]).toEqual(1);
        game.tick();
        expect(grid[1][1]).toEqual(0);
        expect(grid).toEqual(
          [[1, 1, 1],
           [1, 0, 1],
           [1, 1, 1]]
        );
        game = game_constructor(grid);
        game.tick();
        expect(grid).toEqual(
          [[1, 0, 1],
           [0, 0, 0],
           [1, 0, 1]]
        );
      });
    });
  });
});