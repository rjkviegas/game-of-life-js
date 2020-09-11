const create_grid = function (cols, rows) {
  const grid = [];
  for(let i = 0; i < rows; i += 1) {
    let row = [];
    grid.push(row);
    for(let j = 0; j < cols; j += 1) {
      row.push(0);
    };
  };
  return grid;
};

module.exports = { create_grid };
