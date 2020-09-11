function neighbour_finder_constructor (spec) {
  let {grid, x, y} = spec;
  const north = function () {
    if (y === 0) { return undefined }
    return [y - 1, x];
  };
  const south = function () {
    if (y + 1 >= grid.length) { return undefined }
    return [y + 1, x];
  };
  const east = function () {
    return [0, 1];
  }
  return Object.freeze({
    north,
    south,
    east
  });
}

module.exports = { 
  neighbour_finder_constructor
};
