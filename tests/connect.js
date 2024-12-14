const connectEntreprise = require('../steps/connectEntreprise.js')
const checkHomePageEnterprise = require('../steps/checkHomePageEnterprise.js')
module.exports = Object.assign(
  {
    before (browser) {
      browser.maximizeWindow()
    }
  },
  connectEntreprise(),
  checkHomePageEnterprise()
)


