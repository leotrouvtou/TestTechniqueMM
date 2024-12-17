exports.command = function(callback) {
  // should be call on a browser instance
  var browser = this;
  var settings = browser.globals;
  var command_msg = "(Error should be OK)";
  var default_msg = "We check NSS errors";

  var message = (typeof msg === 'undefined' || msg === null) ? default_msg : msg;
  message = message + " " + command_msg;

  browser

   browser
      .sendKeys('#ssn input', "234234")
      .assert.valueContains('#ssn input', '234234', "NSS is not correct")
      .expect.element('[type="submit"]').to.have.attribute('disabled').which.equals('true');
    browser
      .assert.textEquals('mat-error', 'Format invalide')
      .clearValue('#ssn input')
      .sendKeys('#ssn input', "434234")
    browser
      .assert.textEquals('mat-error', 'Numéro national provisoire obsolète : demandez le numéro de sécurité sociale de votre salarié.e commençant par 1 ou 2')

  if( typeof callback === "function"){
    callback.call(self);
  }
  return this; // allows the command to be chained.
};

