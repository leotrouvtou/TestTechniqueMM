module.exports = function() {
  let commandName = `On vérifie la page salariés`
  let command = function(browser) {
    browser
      .pause(5000)
      .click('[href="/employees"]')
      //.checkTextExists('div', ' Postes ')
      .checkTextExists('div', "Statut")
      .checkTextExists('label', "Tags")
      .waitForElementPresent('[href="/employees/tags-manager"]', "l'onglet des tags est accessible")
      .waitForElementPresent('[href="/employees"]', "le lien salariés est présent")
      .waitForElementPresent('[href="/administration"]', "le lien administration est présent")
      .waitForElementPresent('[class="employee-info-name"]', "un élément de la liste des salariés est présent", 15000)
  }
  return { [commandName]: command }
}
