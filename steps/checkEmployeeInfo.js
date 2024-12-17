module.exports = function(status) {
  let commandName = `On vérifie le salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .sendKeys('input#mat-input-0', browser.options.employeeLastName)
      .pause(1000)
      .waitForSpinnerToBeInactive(1,15,'.mdc-circular-progress__gap-patch')
      .waitForElementPresent('[class="employee-info-name"]', "un élément de la liste des salariés est présent", 15000)
      .assert.textContains('[class="employee-info-name"]', browser.options.employeeFullName)
      .assert.textContains('.private-information', status)
      .assert.textContains('.total-employees span', '1 SALARIÉ')
      .click('xpath', "//div[text()=' "+browser.options.employeeFullName+" ']")
      .waitForElementVisible('.lead-container')
      .checkTextExists('span', 'Mme '+browser.options.employeeFullName)
      .assert.textContains('#position', 'À compléter')
  }
  return { [commandName]: command }
}
