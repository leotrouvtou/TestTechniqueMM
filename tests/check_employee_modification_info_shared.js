const connectEntreprise = require('../steps/connectEntreprise.js')
const setCookies = require('../steps/setCookies.js')
const checkEmployeePage = require('../steps/checkEmployeePage.js')
const checkEmployeeInfo = require('../steps/checkEmployeeInfo.js')
const modifyEmployeeBirthDate = require('../steps/modifyEmployeeBirthDate.js')
const modifyEmployeeNSSInfoShared = require('../steps/modifyEmployeeNSSInfoShared.js')

let testDate = new Date().toISOString();
// let testDate ="2024-12-15t111757.245z"
testDate = testDate.replaceAll(':', '')

browser.options.employeeEmail = "az@tohero.fr"
browser.options.employeeFirstName = "Amari"
browser.options.employeeLastName = "Amari"
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
  checkEmployeeInfo('Informations partagées'),
  //modifyEmployeeBirthDate("24/07/2002","13/06/2000"),
  modifyEmployeeNSSInfoShared()
)
