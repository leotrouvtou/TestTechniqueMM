module.exports = function(profil) {
  let commandName = `On vérifie la homepage`
  let command = function(browser) {
    browser
      .assert.textEquals('h1', '3 services, 1 plateforme unique.')
      .checkTextExists('p', 'Pour signer vos contrats et envoyer des paies à vos gestionnaires, rendez-vous sur Movinmotion Social !')
      .checkTextExists('p', "Nous sommes prêts pour votre prochaine note de frais ! Nous sommes encore meilleurs en comptabilité qu'en rimes, c'est pour vous dire.")
      .checkTextExists('p', "Vous êtes plus qu'à un clic de trouver la perle rare pour votre prochain projet !")
      .waitForElementPresent('[href="/company-information"]', "le lien informations est présent")
      .waitForElementPresent('[href="/employees"]', "le lien salariés est présent")
      .waitForElementPresent('[href="/administration"]', "le lien administration est présent")

  }
  return { [commandName]: command }
}
