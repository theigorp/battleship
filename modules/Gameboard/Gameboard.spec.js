const Gameboard = require('./Gameboard');

describe('Gameboard class', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it('is an instace of the Gameboard class', () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
  });
});
