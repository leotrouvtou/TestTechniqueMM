exports.command = function(step, stepMax, spinnerclass) {
  // should be called on a browser instance
  var browser = this,
      settings = browser.globals,
      out = false,
      time=0,
      pauseTime = step/2*1000;

  function checkSpinnerActive() {
    browser.pause(1000)
    browser
      .execute(function(spinnerclass) {
      var elements = document.getElementsByClassName(spinnerclass)
      console.log(elements)
    }, [spinnerclass], function(result) {})
      //.getText(el, function(result) {
      //   if(result.value.match(text)){
      //     console.log('Found text ' + text + ' after ' + time + ' seconds!');
      //     out = true;
      //   } else {
      //     console.log('Waiting for text ' + text + ' to be displayed for ' + time + ' seconds!');
      //   }
      // })
      // .pause(pauseTime)
      // .refresh()
      // .perform(function() {
      //   time = time + step;
      //   if (out == true || time >= stepMax) {
      //     return;
      //   }
      //   browser
      //     .pause(pauseTime);
      //   checkResultText();
      //});
  }
  checkSpinnerActive()
  return this;
}
