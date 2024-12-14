module.exports = function() {
  let commandName = `On crée le salarié ${browser.options.employeeEmail}`
  let command = function(browser) {
    browser
      .click('xpath',  "//span[text()=' Ajouter nouvelle personne ']")
      .assert.textEquals('h2', 'Ajouter une nouvelle personne')
      .waitForElementPresent('input#email', "le champ de renseignement d'email devrait être visible")
      .sendKeys('input#email', browser.options.employeeEmail)
      .click('xpath',  "//span[text()=' Suivant ']")
      .waitForElementPresent('input#firstName', "le champ prénom devrait être visible")
      .waitForElementPresent('input#lastName', "le champ nom devrait être visible")
      .waitForElementPresent('input#civility', "le champ civilité devrait être visible")
      .click('input#civility')
      .click('xpath',  "//span[text()=' Madame ']")
      .sendKeys('input#firstName', browser.options.employeeFirstName)
      .sendKeys('input#lastName', browser.options.employeeLastName)
      .click('xpath',  "//span[text()=' Sauvegarder ']")
  }
  return { [commandName]: command }
}
