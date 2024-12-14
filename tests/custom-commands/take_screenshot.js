const path = require('path')
const fs = require('fs')

exports.command  = function(product, page, filename) {
  var browser = this;
  let screenshotPath = path.join('pages')
  if (!fs.existsSync(screenshotPath)) {
    browser.assert.ok(`Folder '${screenshotPath}' doesn't exist.`)
    fs.mkdirSync(screenshotPath)
    browser.assert.ok(`Folder '$ screenshotPath}' has been created.`)
  }
  resultPath = path.join(screenshotPath, product)
  if (!fs.existsSync(resultPath)) {
    browser.assert.ok(`Folder '${resultPath}' doesn't exist.`)
    fs.mkdirSync(resultPath)
    browser.assert.ok(`Folder '${resultPath}' has been created.`)
  }

  resultPath = path.join(screenshotPath, product, page)
  if (!fs.existsSync(resultPath)) {
    browser.assert.ok(`Folder '${resultPath}' doesn't exist.`)
    fs.mkdirSync(resultPath)
    browser.assert.ok(`Folder '${resultPath}' has been created.`)
  }
  resultPath = path.join(screenshotPath, product, page, process.env.LANG||'fr')
  if (!fs.existsSync(resultPath)) {
    browser.assert.ok(`Folder '${resultPath}' doesn't exist.`)
    fs.mkdirSync(resultPath)
    browser.assert.ok(`Folder '${resultPath}' has been created.`)
  }
  resultPath = path.join(resultPath, filename)
  browser
    .saveScreenshot(resultPath);
  if( typeof callback === "function"){
    callback.call(self);
  }
  return this; // allows the command to be chained.
};

