function neighbour_finder_constructor(spec) {
    let {pre_tick_grid, x, y} = spec;
    const north = function () {
        if (y === 0) {
            return undefined;
        }
        return { y: y - 1, x };
    };
    const south = function () {
        if (y + 1 >= pre_tick_grid.length) {
            return undefined;
        }
        return { y: y + 1, x };
    };
    const east = function () {
        if (x + 1 >= pre_tick_grid[y].length) {
            return undefined;
        }
        return { y, x: x + 1 };
    };
    const west = function () {
        if (x - 1 < 0) {
            return undefined;
        }
        return { y, x: x - 1 };
    };
    const north_east = function () {
        if (y - 1 < 0 || x + 1 >= pre_tick_grid[y].length) {
            return undefined;
        }
        return { y: y - 1, x: x + 1 };
    };
    const south_east = function () {
        if (y + 1 >= pre_tick_grid.length || x + 1 >= pre_tick_grid[y].length) {
            return undefined;
        }
        return { y: y + 1, x: x + 1 };
    };
    const south_west = function () {
        if (y + 1 >= pre_tick_grid.length || x - 1 < 0) {
            return undefined;
        }
        return { y: y + 1, x: x - 1 };
    };
    const north_west = function () {
        if (y - 1 < 0 || x - 1 < 0) {
          return undefined;
        }
        return { y: y - 1, x: x - 1 };
    };
    const all = function () {
        neighbours = {
            north: north(),
            north_east: north_east(),
            east: east(),
            south_east: south_east(),
            south: south(),
            south_west: south_west(),
            west: west(),
            north_west: north_west()
        };
        Object.keys(neighbours).forEach(function(key) {
            neighbours[key] === undefined && delete neighbours[key]
        });
        return neighbours;
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
