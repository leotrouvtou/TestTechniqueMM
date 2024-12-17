module.exports = function(phone) {
  let commandName = `We modify the phone numbre for ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueContains('#phone input', '+33614567890', "phone should be empty")
      .clearValue('#phone input')
      .sendKeys('#phone input', phone)
      .scrollToElementByID("last-medical-visit-day")
      .click('[type="submit"]')
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .scrollToElementByID("phone")
      .assert.valueContains('#phone input', '+33'+phone.substring(1), "phone should be "+phone)
      .clearValue('#phone input')
      .sendKeys('#phone input', '0614567890')
      .click('[type="submit"]')
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .assert.valueContains('#phone input', '+33614567890', "phone should be empty +33614567890")
      .click('[type="submit"]')

  }
  return { [commandName]: command }
}
