// In JavaScript
const { PhoneNumber } = require('dzpnp');
var myNumber = new PhoneNumber('0665686523');
console.log(myNumber.type()); // mobile
console.log(myNumber.operator()); // MOBILIS
myNumber = new PhoneNumber('036123456');
console.log(myNumber.wilaya()); // [ 'SETIF' ]
console.log(myNumber.suffix()); // 36123456
console.log(myNumber.globalCodeFormat()); // null
console.log(myNumber.convertToFormat()); // +21336123456
console.log(myNumber.isEqualTo('036-12 34 56')); // true
