module.exports = function(phone) {
  let commandName = `On modifie le bic du salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueContains('#phone input', '', "phone should be empty")
      .sendKeys('#phone input', phone)
      .scrollToElementByID("last-medical-visit-day")
      .click('[type="submit"]')
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("phone")
      .assert.valueContains('#phone input', '+33'+phone.substring(1), "phone should be "+phone)
      .clearValue('#phone input')
      .click('[type="submit"]')

  }
  return { [commandName]: command }
}
