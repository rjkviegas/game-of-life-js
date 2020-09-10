const create_grid = function(row, col) {
  grid = [];
  for(let i = 0; i < row; i += 1) {
    let row = [];
    grid.push(row);
    for(let j = 0; j < col; j += 1) {
      row.push(0);
    };
  };
  return grid;
};

module.exports = { create_grid };
