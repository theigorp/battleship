const Ship = require('./Ship');

describe('Ship class', () => {
  let ship;
  const shipLength = 4;
  const shipTimesHit = 2;

  beforeEach(() => {
    ship = new Ship(shipLength, shipTimesHit);
  });

  it('is an instance of the Ship class', () => {
    expect(ship).toBeInstanceOf(Ship);
  });

  it('has length property of the type number', () => {
    expect(ship.length).toBeDefined();
    expect(typeof ship.length).toBe('number');
  });

  it('has the timesHit property of the type number', () => {
    expect(ship.timesHit).toBeDefined();
    expect(typeof ship.timesHit).toBe('number');
  });

  it('has the hit() method that increases the timesHit property', () => {
    expect(ship.hit).toBeDefined();
    ship.hit();
    expect(ship.timesHit).toBe(shipTimesHit + 1);
  });

  it('has the isSunk method which returns a boolean value', () => {
    expect(ship.isSunk).toBeDefined();
    expect(typeof ship.isSunk()).toBe('boolean');
  });

  describe('isSunk() method', () => {
    it('calculates wheter a ship is sunk based on its length and number of hits', () => {
      ship.hit();
      expect(ship.isSunk()).toBe(false);
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    });
  });
});
