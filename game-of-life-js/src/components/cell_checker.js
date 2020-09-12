function cell_checker_constructor (spec) {
    let { grid, y, x } = spec;
    const is_alive = function () {
        return grid[y][x] === 1;
    };
    const is_dead = function () {
      return grid[y][x] === 0;
    };
    return Object.freeze({
      is_alive,
      is_dead
    })
};

module.exports = { cell_checker_constructor };
