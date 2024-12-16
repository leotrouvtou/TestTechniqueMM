module.exports = function() {
  let commandName = `On modifie le NSS du salarié ${browser.options.employeeEmail} avec les infos shared`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '200063155533324', "NSS should be correct")
      // .click('xpath',"//label[text()=' Générer NTT pour salarié sans N° de sécu. français ']")
      // .assert.valueContains('#ssn input', '200063155533324', "NSS should be still the same")
      .expect.element('[type="submit"]').to.have.attribute('disabled').which.equals('true');
    browser
      .click('xpath',"//span[text()=' Annuler ']")
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("ssn")
      .assert.valueContains('#ssn input', '200063155533324', "NSS should be correct after save")  }
  return { [commandName]: command }
}
