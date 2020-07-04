/**
* Triggers when the class fails to find the given number.
*/
class InvalidNumber extends Error {
  constructor(message) {
    super(message);
  }
}
module.exports = InvalidNumber;
