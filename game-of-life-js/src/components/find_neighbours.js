const find_north_neighbour = function (grid, y, x) {
  neighbour_y = y - 1;
  if (neighbour_y < 0) { return undefined }
  return [neighbour_y, x];
};

const find_south_neighbour = function (grid, y, x) {
  neighbour_y = y + 1;
  if (neighbour_y >= grid.length) { return undefined }
  return [neighbour_y, x];
};

module.exports = { 
  find_north_neighbour,
  find_south_neighbour 
};
