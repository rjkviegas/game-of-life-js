const { create_grid } = require("../src/create_grid");

describe('create_grid', function() {
  it('returns a 0 filled 2x2 2D array when it receives 2 and 2',function() {
    expect(create_grid(2, 2)).toEqual([[0, 0], [0, 0]]);
  });
  it('returns a 0 filled 3x3 2D array when it receives 3 and 3',function() {
    expect(create_grid(3, 3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });
  it('returns a 0 filled 2x3 2D array when it receives 2 and 3',function() {
    expect(create_grid(2, 3)).toEqual([[0, 0, 0,], [0, 0, 0]]);
  });
});
