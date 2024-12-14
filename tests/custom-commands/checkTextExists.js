exports.command = function(id, text, callback) {
  // should be call on a browser instance
  let browser = this


  browser
    .execute(function(id, text){
      elementsList = document.getElementsByTagName(id)
      for (i in elementsList){
        if (elementsList[i].textContent==text){
          return true
        }
      }
    }, [id, text], function(result) {
      browser.assert.isTrue(result.value, "'"+text+"' should exists in "+id )
    });
  if (typeof callback === "function") {
    callback.call(this)
  }
  return this // allows the command to be chained.
}

