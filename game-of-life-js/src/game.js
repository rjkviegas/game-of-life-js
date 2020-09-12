function game_constructor (grid) {
  const tick = function () {
    grid[0][0] = 0;
  };
  return ({
    tick
  })
};

module.exports = { game_constructor };
