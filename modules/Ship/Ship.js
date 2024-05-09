class Ship {
  constructor(length, timesHit, isSunk) {
    this.length = length;
    this.timesHit = timesHit;
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    if (this.length === this.timesHit) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
