module.exports = function() {
  let commandName = `On reinit le salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .click('xpath',"//label[text()=' Générer NTT pour salarié sans N° de sécu. français ']")
      .selectDate("22/01/2001") // on réinitialise également la date de naissance
      .click('[type="submit"]')
      .click('xpath',"//span[text()=' CONFIRMER ']")
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueEquals('#ssn input', '', "ssn should be empty")
  }
  return { [commandName]: command }
}
