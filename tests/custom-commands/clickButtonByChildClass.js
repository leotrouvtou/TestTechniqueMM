exports.command = function(childClass, msg, callback) {
  // should be call on a browser instance
  var browser = this;
  var settings = browser.globals;
  var command_msg = "(ClickButtonByChildClass - %s present in %d ms)";
  var default_msg = "Button that contains child with attr '"+childClass+"' should be clicked";

  var message = (typeof msg === 'undefined' || msg === null) ? default_msg : msg;
  message = message + " " + command_msg;

  browser

    .execute(function(childClass) {
      var elements = document.querySelectorAll(childClass);

      console.log(elements)
      var el = elements[0];
      var button = el.parentElement
      button.click();
    }, [childClass], function(result) {})

  if( typeof callback === "function"){
    callback.call(self);
  }
  return this; // allows the command to be chained.
};

