function cell_checker_constructor (spec) {
    let { pre_tick_grid, y, x } = spec;
    const is_alive = function () {
        return pre_tick_grid[y][x] === 1;
    };
    const is_dead = function () {
      return pre_tick_grid[y][x] === 0;
    };
    return Object.freeze({
      is_alive,
      is_dead
    })
};

module.exports = { cell_checker_constructor };
