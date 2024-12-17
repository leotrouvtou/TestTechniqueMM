module.exports = function(dateToPut) {
  let commandName = `On modifie la date de naissance du salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .selectDate(dateToPut)
      .click('[type="submit"]')
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("birth-date")
      .assert.valueContains('#birth-date input', dateToPut, "birthdate should be "+dateToPut)
      .click('[type="submit"]')


  }
  return { [commandName]: command }
}
