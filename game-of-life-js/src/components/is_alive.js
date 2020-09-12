function cell_checker_constructor (spec) {
    let { grid, y, x } = spec;
    const is_alive = function () {
        return grid[y][x] === 1;
    }
    return Object.freeze({
      is_alive
    })
};

module.exports = { cell_checker_constructor };
