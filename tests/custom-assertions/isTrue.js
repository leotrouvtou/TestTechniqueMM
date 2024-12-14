/**
 * Checks if valueis True.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.isTrue(value);
 *    };
 * ```
 *
 * @method isTrue
 * @param {boolean} value to check
 * @api assertions
 */

isTrue = function(value, message) {
  this.message = message;

  this.expected = true;

  this.pass = (value) => {
       return value === this.expected;
    };

  this.value = (result) => {
        return result;
    };

  this.command = (callback) => {
    callback(value);
    };
};

module.exports.assertion = isTrue;

