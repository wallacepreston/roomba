/** Class representing a roomba. */
class Roomba {
  /**
   * Create a roomba.
   * @param {number} initialDeg - The direction (in degrees) the roomba starts traveling in.
   * @param {number} initialVelocity - The velocity (integer, in mph) the roomba starts traveling at.
   */
  constructor(initialDeg, initialVelocity) {
    this.initialDeg = initialDeg;
    this.deg = initialDeg;
    this.velocity = initialVelocity;
  }

  /**
   * Turn roomba by passed-in degrees. Only pass positive degrees.
   * @param {number} deg - Degrees the roomba should turn by.
   * @param {string} direction - 'right' or 'left'. Defaults to 'right' (clockwise)
   */
  turn(deg, direction) {
    const toTurn = direction === 'left' ? -deg : deg;
    const totalDir = this.deg + toTurn;
    const newDir = totalDir % 360;
    this.deg = newDir;
  }

  /**
   * Get the direction, as a string ('right' or 'left'), the roomba is traveling in, depending on the current degrees compared to the initial degrees.
   * @return {string} The direction.
   */
  get dir() {
    const diff = this.deg - this.initialDeg;
    return diff > 180 ? 'left' : 'right';
  }
}

const myRoomba = new Roomba(0, 2);

myRoomba.turn(100);
myRoomba.turn(55);
console.log('myRoomba.deg: ', myRoomba.deg);
myRoomba.turn(10, 'left')
console.log('myRoomba.dir: ', myRoomba.dir);
