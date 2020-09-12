function status_changer_constructor (spec) {
    let { grid, y, x } = spec;
    const make_alive = function () {
        grid[y][x] = 1;
    };
    const make_dead = function () {
      grid[y][x] = 0;
    }
    return Object.freeze({
        make_alive,
        make_dead
    })
};

module.exports = { status_changer_constructor };
