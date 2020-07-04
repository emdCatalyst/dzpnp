/**
* Triggers when altering/performing an action a non allowed type of element.
*/
class IllegalOperation extends Error {
  constructor(message) {
    super(message);
  }
}
module.exports = IllegalOperation;
