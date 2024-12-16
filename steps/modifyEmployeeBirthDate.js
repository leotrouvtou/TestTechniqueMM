module.exports = function(dateToCheck='') {
  let commandName = `On modifie la date de naissance du salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .selectDate("24/07/2002", dateToCheck)
    if (dateToCheck!=''){
      browser
      .click('xpath',"//span[text()=' Annuler ']")
    } else {
      browser
        .click('[type="submit"]')
    }
    browser
      .waitForElementPresent('[svgicon="mm-pencil"]')
      .pause(10000)

  }
  return { [commandName]: command }
}
