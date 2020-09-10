const create_grid = function(num_of_row, num_of_col) {
  const grid = [];
  for(let i = 0; i < num_of_row; i += 1) {
    let row = [];
    grid.push(row);
    for(let j = 0; j < num_of_col; j += 1) {
      row.push(0);
    };
  };
  return grid;
};

module.exports = { create_grid };
