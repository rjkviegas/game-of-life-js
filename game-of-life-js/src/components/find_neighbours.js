function neighbour_finder_constructor(spec) {
    let {grid, x, y} = spec;
    const north = function () {
        if (y === 0) {
            return undefined;
        }
        return [y - 1, x];
    };
    const south = function () {
        if (y + 1 >= grid.length) {
            return undefined;
        }
        return [y + 1, x];
    };
    const east = function () {
        if (x + 1 >= grid[y].length) {
            return undefined;
        }
        return [y, x + 1];
    };
    const west = function () {
        return [y, x - 1];
    };
    return Object.freeze({
        north,
        south,
        east,
        west
    });
}

module.exports = { 
    neighbour_finder_constructor
};
