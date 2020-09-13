const { cell_checker_constructor } = require("./cell_checker");
const { neighbour_finder_constructor } = require("./find_neighbours");

function neighbour_checker_constructor(spec) {
    let { grid, x, y } = spec;
    const neighbour_finder = neighbour_finder_constructor(spec);
    const total_alive = function () {
        let result = 0;
        let neighbours = neighbour_finder.all();
        Object.keys(neighbours).forEach(function(key) {
            let neighbour = {
              grid,
              x: neighbours[key].x,
              y: neighbours[key].y
            };
            let cell_checker = cell_checker_constructor(neighbour);
            if (cell_checker.is_alive() === true) { result += 1 };
        })
        return result;
        
    };
    return ({
      total_alive
    });
};

module.exports = { neighbour_checker_constructor };