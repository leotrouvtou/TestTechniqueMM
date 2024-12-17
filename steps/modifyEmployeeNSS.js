module.exports = function() {
  let commandName = `We modify the NSS for employee ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '', "ssn should be empty")
      .expect.element('[type="submit"]').to.not.have.attribute('disabled');
    browser
      .checkNSSErrors()
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
