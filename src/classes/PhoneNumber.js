const InvalidNumber = require('../errors/InvalidNumber.js');
const IllegalOperation = require('../errors/IllegalOperation.js');
const wilayaCodes = require('../data/wilayaCodes.json');
const operatorCodes = require('../data/operatorCodes.json');
/**
* Represents an algerian phone number, used to alter the number and access its properties.
@param {string} body The body of the phone number.
@throws {InvalidNumber} Typically when you provide an invalid phone number in type.
@example
* // In JavaScript
* const { PhoneNumber } = require('dzpnp');
* var myNumber = new PhoneNumber('0665686523'); // Not my ACTUAL number.
*/
class PhoneNumber {
  constructor(body=null) {
    this.body = body;
    this.checkValidity();
  }
  /**
  * Check if an actual body was given.
  @ignore
  @returns {boolean} True if the body passes the tests, false otherwhise.
  */
  checkValidity() {
    let status = this.body && typeof(this.body) == 'string' ? true : false;
    if(!status) throw new InvalidNumber(`Type of body is not supported. Expected string but recieved ${typeof(this.body)}.`);
    return status;
  }
  /**
  * Initial processing of the number. Remove the country code (plus and 00) , the 0 before the operator code and any unnecessary chars used to seperate numbers such as spaces and hyphens.
  @ignore
  @returns {string} The new number.
  */
  processCodes() {
    let result = this.body.replace(/\D/g,'').replace(/(\b00213|\b213)/,'').replace(/(\b0|\b\(0\))/,'');
    return result;
  }
  /**
  * Check the type of the phone number . Mobile, landline or null (when your shit is random).
  @returns {string|null} mobile, landline or null.
  @example
  * console.log(myNumber.type()); // mobile
  */
  type() {
    let wilayas = [];
    // Using a loop to detect multi-hits.
    Object.keys(wilayaCodes).forEach((wilaya, i) => {
      if(this.processCodes().startsWith(wilayaCodes[wilaya])) wilayas.push(wilaya);
    });
    let operatorCode = /\b\d/.exec(this.processCodes());
    if(this.processCodes().length == 9 && Object.keys(operatorCodes).find(oc => operatorCodes[oc] == operatorCode)) {
      return 'mobile';
    } else if (this.processCodes().length == 8 && wilayas.length >= 1) {
      return 'landline';
    } else {
      return null;
    }
  }
  /**
  * Retrieve the number's operator, applicable on a mobile number.
  @returns {string|null} The mobile operator, can be null if not found.
  @throws {IllegalOperation} When performed on a null / landline number.
  @example
  * console.log(myNumber.operator()); // MOBILIS
  */
  operator() {
    if(this.type() != 'mobile') throw new IllegalOperation(`Cannot retrieve operator. Expected mobile, recieved ${this.type()}.`);
    let codeMatch = Object.keys(operatorCodes).find(oc => operatorCodes[oc] == this.processCodes().slice(0,1));
    return codeMatch ? codeMatch : null;
  }
  /**
  * Retrieve the number's possible wilayas of origin (e.g. BATNA and BISKRA are both 33), applicable on a landline number.
  @returns {string[]} The possible wilayas of origin, wan be empty or single-valued.
  @throws {IllegalOperation} When performed on a null / mobile number.
  @example
  * myNumber = new PhoneNumber('036123456');
  * console.log(myNumber.wilaya()); // [ 'SETIF' ]
  */
  wilaya() {
    if(this.type() != 'landline') throw new IllegalOperation(`Cannot retrieve wilaya. Expected landline, recieved ${this.type()}.`);
    let wilayas = [];
    // Using a loop to detect multi-hits.
    Object.keys(wilayaCodes).forEach((wilaya, i) => {
      if(this.processCodes().startsWith(wilayaCodes[wilaya])) wilayas.push(wilaya);
    });
    return wilayas;
  }
  /**
  * Retrieve the processed/raw version of the number without the country code and local code.
  @returns {string} As described above.
  @example
  * console.log(myNumber.suffix()); // 36123456
  */
  suffix() {
    return this.processCodes();
  }
  /**
  * Retrieve the global code format used, typically using double zeros (CODENAME: GLOBAL_00) and the plus sign (CODENAME: GLOBAL_PLUS).
  @returns {string|null} GLOBAL_00 , GLOBAL_PLUS or null in case yu didnt't use any of the above.
  @example
  * console.log(myNumber.globalCodeFormat()); // null
  */
  globalCodeFormat() {
    if(/\b00213/.test(this.body.replace(/\D/g,''))) return 'GLOBAL_00';
    if(/\b213/.test(this.body.replace(/\D/g,''))) return 'GLOBAL_PLUS';
    return null;
  }
  /**
  * Convert the current phone number to a standard format like E.126.
  @param {string=} [format=E.126] The format to convert to, E.126 is default and currently the only format supported.
  @returns {string} The converted number.
  @example
  * console.log(myNumber.convertToFormat()); // +21336123456
  */
  convertToFormat(format='E.126') {
    if(!['E.126'].includes(format)) throw new IllegalOperation('You are trying to convert to a non-supported format.');
    return `+213${this.suffix()}`;
  }
  /**
  * Compare current number to another one.
  @param {string} number The number to compare to.
  @returns {boolean} Represents equality.
  @throws {InvalidNumber} In case you didn't provide a number.
  @example
  * console.log(myNumber.isEqualTo('036-12 34 56')); // true
  */
  isEqualTo(number) {
    if(!number) throw new InvalidNumber('Please specify a number to check for.');
    return this.suffix() == (new PhoneNumber(number)).suffix();
  }
}

module.exports = PhoneNumber;
