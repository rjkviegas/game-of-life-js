function neighbour_finder_constructor(spec) {
    let {grid, x, y} = spec;
    const north = function () {
        if (y === 0) {
            return undefined;
        }
        return { y: y - 1, x: x };
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
        if (y + 1 >= grid.length || x + 1 >= grid[y].length) {
            return undefined;
        }
        return [y + 1, x + 1];
    };
    const south_west = function () {
        if (y + 1 >= grid.length || x - 1 < 0) {
            return undefined;
        }
        return [y + 1, x - 1];
    };
    const north_west = function () {
        if (y - 1 < 0 || x - 1 < 0) {
          return undefined;
        }
        return [y - 1, x - 1];
    };
    const all = function () {
        return {
            north: north(),
            north_east: north_east(),
            east: east(),
            south_east: south_east(),
            south: south(),
            south_west: south_west(),
            west: west(),
            north_west: north_west()
          };
    };
    return Object.freeze({
        north,
        south,
        east,
        west,
        north_east,
        south_east,
        south_west,
        north_west,
        all
    });
}

module.exports = { 
    neighbour_finder_constructor
};
