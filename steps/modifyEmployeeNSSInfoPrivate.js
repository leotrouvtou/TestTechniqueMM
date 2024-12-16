module.exports = function() {
  let commandName = `On modifie le NSS du salarié ${browser.options.employeeEmail} avec les infos shared`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '292069999999964', "NTT should be correct")
      .click('xpath',"//label[text()=' Générer NTT pour salarié sans N° de sécu. français ']")
      .sendKeys('#ssn input', '292069905410811')
      .click('[type="submit"]')
      .click('xpath',"//span[text()=' CONFIRMER ']")
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("ssn")
      .assert.valueContains('#ssn input', '292069905410811', "NSS should be correct after save")
      .click('xpath',"//label[text()=' Générer NTT pour salarié sans N° de sécu. français ']")
      .click('[type="submit"]')
      .click('xpath',"//span[text()=' CONFIRMER ']")
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("ssn")
      .assert.valueContains('#ssn input', '292069999999964', "NTT should be back")

  }
  return { [commandName]: command }
}
