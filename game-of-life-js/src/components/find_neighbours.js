const find_north_neighbour = function (grid, y, x) {
  neighbour_y = y - 1;
  if (neighbour_y < 0) { return undefined }
  return [y - 1, x];
};

const find_south_neighbour = function (grid, y, x) {
  return [y + 1, x];
};

module.exports = { 
  find_north_neighbour,
  find_south_neighbour 
};
