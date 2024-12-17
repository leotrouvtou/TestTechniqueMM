module.exports = function() {
  let commandName = `On modifie le NSS du salarié ${browser.options.employeeEmail} avec les infos shared`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '200063155533324', "NSS should be correct "+'200063155533324')
      .expect.element('[type="submit"]').to.have.attribute('disabled').which.equals('true');
    browser
      .click('xpath',"//span[text()=' Annuler ']")
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("ssn")
      .assert.valueContains('#ssn input', '200063155533324', "NSS should be stil correct after cancel")  }
  return { [commandName]: command }
}
