module.exports = function() {
  let commandName = `On vérifie le salarié ${browser.options.employeeEmail}`
  let command = function(browser) {

    browser
      .sendKeys('input#mat-input-0', browser.options.employeeLastName)
      .pause(1000)
      .waitForElementPresent('[class="employee-info-name"]', "un élément de la liste des salariés est présent", 15000)
      .assert.textContains('[class="employee-info-name"]', browser.options.employeeFullName)
      .assert.textContains('.private-information', 'Invité inactif')
      .checkTextExists('span',' 1 Salarié ')
      .click('xpath',  "//div[text()=' "+browser.options.employeeFullName+" ']")
      .checkTextExists('span','Mme Léo Bernardos')
      //.checkTextExists('span', browser.options.employeeEmail)
      .assert.textContains('#address', 'À compléter')
      .assert.textContains('#birth-date', 'À compléter')
      .click('#birth-date')
      .selectDate("24/07/1984")
      browser.pause(10000)

  }
  return { [commandName]: command }
}
