const { cell_checker_constructor } = require("./components/cell_checker");
const { neighbour_checker_constructor } = require("./components/neighbour_checker");
const { status_changer_constructor } = require("./components/status_changer");

function game_constructor (grid) {
  const pre_tick_grid = JSON.parse(JSON.stringify(grid));
  const tick = function () {
    for(let i = 0; i < grid.length; i += 1) {
      for(let j = 0; j < grid[i].length; j += 1) {
        let neighbour_spec = { pre_tick_grid, y: i, x: j };
        let status_spec = { grid, y: i, x: j };
        let neighbour_checker = neighbour_checker_constructor(neighbour_spec)
        let cell_checker = cell_checker_constructor(neighbour_spec);
        let status_changer = status_changer_constructor(status_spec);
        if (cell_checker.is_alive()) {
          if (neighbour_checker.total_alive() < 2 || neighbour_checker.total_alive() > 3) {
            status_changer.make_dead();
          }
        } else {
          if (neighbour_checker.total_alive() === 3) {
            status_changer.make_alive();
          }
        }
      }
    }
  };
  return ({
    tick
  })
};

module.exports = { game_constructor };
