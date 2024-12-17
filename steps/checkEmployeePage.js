module.exports = function() {
  let commandName = `We check the employee page`
  let command = function(browser) {
    browser
      .pause(5000)
      .click('[href="/employees"]')
      .waitForSpinnerToBeInactive(1, 15, '.mdc-circular-progress__gap-patch')
      .checkTextExists('div', "Statut")
      .checkTextExists('label', "Tags")
      .waitForElementPresent('[href="/employees/tags-manager"]', "the tag tab should be there")
      .waitForElementPresent('[href="/employees"]', "the employee link should be there")
      .waitForElementPresent('[href="/administration"]', "the admin link should be there")
  }
  return { [commandName]: command }
}
