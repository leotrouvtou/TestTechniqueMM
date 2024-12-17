const connectEntreprise = require('../steps/connectEntreprise.js')
const setCookies = require('../steps/setCookies.js')
const checkEmployeePage = require('../steps/checkEmployeePage.js')
const checkEmployeeInfo = require('../steps/checkEmployeeInfo.js')
const modifyEmployeePhone = require('../steps/modifyEmployeePhone.js')
const modifyEmployeeNSSInfoPrivate = require('../steps/modifyEmployeeNSSInfoPrivate.js')


browser.options.employeeEmail = "clemence.denoui@yopmail.com"
browser.options.employeeFirstName = "Clémence"
browser.options.employeeLastName = "Denoui"
browser.options.employeeFullName = browser.options.employeeFirstName+" "+browser.options.employeeLastName

module.exports = Object.assign(
  {
    before (browser) {
      browser.maximizeWindow()
    }
  },
  connectEntreprise(),
  setCookies('admin'),
  checkEmployeePage(),
  checkEmployeeInfo('Informations privées'),
  modifyEmployeePhone('0612345678'),
  modifyEmployeeNSSInfoPrivate()
)
