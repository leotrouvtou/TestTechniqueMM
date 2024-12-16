module.exports = function(dateToPut, dateToCheck='') {
  let commandName = `On modifie la date de naissance du salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .waitForElementVisible('mm-employee-detailed button')
      .clickButtonByChildClass('[svgicon="mm-pencil"]')
      .selectDate(dateToPut, dateToCheck)
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
