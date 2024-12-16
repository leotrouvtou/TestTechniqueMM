const connectEntreprise = require('../steps/connectEntreprise.js')
const setCookies = require('../steps/setCookies.js')
const checkEmployeePage = require('../steps/checkEmployeePage.js')
const checkEmployeeInfo = require('../steps/checkEmployeeInfo.js')
const modifyEmployeeBirthDate = require('../steps/modifyEmployeeBirthDate.js')
const modifyEmployeeNSSInfoPrivate = require('../steps/modifyEmployeeNSSInfoPrivate.js')

let testDate = new Date().toISOString();
// let testDate ="2024-12-15t111757.245z"
testDate = testDate.replaceAll(':', '')

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
//  modifyEmployeeBirthDate("24/07/1984", "13/06/1984"),
  modifyEmployeeNSSInfoPrivate()
)
