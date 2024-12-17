const connectEntreprise = require('../steps/connectEntreprise.js')
const setCookies = require('../steps/setCookies.js')
const checkEmployeePage = require('../steps/checkEmployeePage.js')
const checkEmployeeInfo = require('../steps/checkEmployeeInfo.js')
const modifyEmployeePhone = require('../steps/modifyEmployeePhone.js')
const modifyEmployeeNSSInfoShared = require('../steps/modifyEmployeeNSSInfoShared.js')


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
  //modifyEmployeePhone('0612345678'),
  modifyEmployeeNSSInfoShared()
)
