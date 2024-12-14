module.exports = function() {
  let commandName = `Connexion au portail entreprise`
  let command = function(browser) {
    browser
      .url(`${browser.baseUrl}`)
      .waitForElementVisible('body')
      .assert.titleContains('Movinmotion - Login')
      .assert.visible('input[type=email]')
      .assert.visible('input[type=password]')
      .sendKeys('input[type=email]', process.env.MMLOGIN)
      .sendKeys('input[type=password]', process.env.MMPASSWORD)
      .assert.visible('button[type=submit]')
      .click('button[type=submit')


  }

  return { [commandName]: command }
}
