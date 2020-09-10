const { create_grid } = require("../src/create_grid");

describe('create_grid', function() {
  it('returns a 2x2 2D array filled with 0s when it receives 2 and 2',function() {
    expect(create_grid(2, 2)).toEqual([[0, 0], [0, 0]]);
  });
});
