exports.command = function(id, callback) {
  // should be call on a browser instance
  let browser = this
  browser
    .execute(function (id) {
      element = document.getElementById(id)
      console.log(element)
      element.scrollIntoView();
    }, [id]);

  if (typeof callback === "function") {
    callback.call(this)
  }
  return this // allows the command to be chained.
}
