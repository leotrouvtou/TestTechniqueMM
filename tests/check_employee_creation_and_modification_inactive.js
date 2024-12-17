const connectEntreprise = require('../steps/connectEntreprise.js')
const setCookies = require('../steps/setCookies.js')
const checkEmployeePage = require('../steps/checkEmployeePage.js')
const createEmployee = require('../steps/createEmployee.js')
const checkEmployeeCreated = require('../steps/checkEmployeeCreated.js')
const modifyEmployeeBirthDate = require('../steps/modifyEmployeeBirthDate.js')
const modifyEmployeeNSS = require('../steps/modifyEmployeeNSS.js')
const reinitEmployee = require('../steps/reinitEmployee.js')

let testDate = new Date().toISOString();
// let testDate ="2024-12-15t111757.245z"
testDate = testDate.replaceAll(':', '')

browser.options.employeeEmail = "employeeuser"+testDate+"@yopmail.com"
browser.options.employeeFirstName = "Léo"
browser.options.employeeLastName = "Bernardos"
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
//  createEmployee(),
  checkEmployeeCreated(),
  modifyEmployeeBirthDate("24/07/2002"),
  modifyEmployeeNSS(),
  reinitEmployee()
)


