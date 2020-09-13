const { neighbour_checker_constructor } = require("./components/neighbour_checker");
const { status_changer_constructor } = require("./components/status_changer");

function game_constructor (grid) {
  const tick = function () {
    for(let i = 0; i < grid.length; i += 1) {
      for(let j = 0; j < grid[i].length; j += 1) {
        let spec = { grid, y: j, x: i };
        let neighbour_checker = neighbour_checker_constructor(spec)
        let status_changer = status_changer_constructor(spec);
        if (neighbour_checker.total_alive() < 2) {
          status_changer.make_dead();
        };
      }
    }
  };
  return ({
    tick
  })
};

module.exports = { game_constructor };
