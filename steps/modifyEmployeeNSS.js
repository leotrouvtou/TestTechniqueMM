module.exports = function() {
  let commandName = `We modify the NSS for employee ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '', "ssn should be empty")
      .expect.element('[type="submit"]').to.not.have.attribute('disabled');
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
      .click('xpath',"//label[text()=' Générer NTT pour salarié sans N° de sécu. français ']")
      .assert.valueContains('#ssn input', '20207999999', "NTT should be correct")
      .click('[type="submit"]')
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("ssn")
      .assert.valueContains('#ssn input', '20207999999', "NTT should be correct after save") 
     
  }
  return { [commandName]: command }
}
