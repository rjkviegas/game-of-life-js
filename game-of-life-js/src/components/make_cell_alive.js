function status_changer_constructor (spec) {
    let { grid, y, x } = spec;
    const make_alive = function () {
        grid[y][x] = 1;
    };
    return Object.freeze({
        make_alive
    })
};

module.exports = { status_changer_constructor };
