exports.command = function(date, dateToCheck, callback) {
  // should be call on a browser instance
  let browser = this
var parts = date.split("/");
var dt = new Date(parseInt(parts[2], 10),
                  parseInt(parts[1], 10) - 1,
                  parseInt(parts[0], 10));

  actualYear = new Date().getFullYear()
  browser
    .waitForElementVisible('#birth-date')
    .scrollToElementByID("birth-date")
    .click('[aria-label="Open calendar"]')
    .click('.mat-calendar-period-button')
  if (dt.getFullYear()<=actualYear-24){
    browser
      .click('[aria-label="Previous 24 years"]')

  }
  browser
    .click('xpath',  "//span[text()=' "+dt.getFullYear()+" ']")
    .pause(1000)
    .click('xpath',  "//span[text()=' "+dt.toLocaleString('FR-fr', { month: 'short' }).toUpperCase()+" ']")
    .pause(1000)
    .click('xpath',  "//span[text()=' "+dt.getDate()+" ']")
    .pause(1000)
  if (dateToCheck==''){
    browser
      .assert.valueEquals('[placeholder="JJ/MM/AAAA"]', date);
  } else {
    browser
      .expect.element('[type="submit"]').to.have.attribute('disabled').which.equals('true');
    browser

      .assert.valueEquals('[placeholder="JJ/MM/AAAA"]', dateToCheck);
  }
  if (typeof callback === "function") {
    callback.call(this)
  }
  return this // allows the command to be chained.
}
