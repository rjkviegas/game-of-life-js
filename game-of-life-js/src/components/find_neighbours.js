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
        if (x - 1 < 0) {
          return undefined;
        }
        return [y, x - 1];
    };
    const north_east = function () {
        if (y - 1 < 0 || x + 1 >= grid[y].length) {
          return undefined;
        }
        return [y - 1, x + 1];
    };
    const south_east = function () {
        return [1,1];
    };
    return Object.freeze({
        north,
        south,
        east,
        west,
        north_east,
        south_east
    });
}

module.exports = { 
    neighbour_finder_constructor
};
