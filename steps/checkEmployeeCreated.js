module.exports = function() {
  let commandName = `On vérifie le salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .sendKeys('input#mat-input-0', browser.options.employeeLastName)
      .pause(1000)
      .waitForSpinnerToBeInactive(1,15,'.mdc-circular-progress__gap-patch')
      .waitForElementPresent('[class="employee-info-name"]', "un élément de la liste des salariés est présent", 15000)
      .assert.textContains('[class="employee-info-name"]', browser.options.employeeFullName)
      .assert.textContains('.private-information', 'Invité inactif')
      .checkTextExists('span',' 1 Salarié ')
      .click('xpath', "//div[text()=' "+browser.options.employeeFullName+" ']")
      .waitForElementVisible('.lead-container')
      .checkTextExists('span','Mme Léo Bernardos')
      //.checkTextExists('span', browser.options.employeeEmail)
      .assert.textContains('#address', 'À compléter')
      //.assert.textContains('#birth-date', 'À compléter')
        }
  return { [commandName]: command }
}
