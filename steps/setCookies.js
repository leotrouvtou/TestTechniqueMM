  module.exports = function(name) {
  let commandName = `On définie les cookie de ${name}`
  let command = function(browser) {
    browser
      .cookies.set(  {
        name: 'axeptio_cookies',
        value: '{%22$$token%22:%22etvk6jt4mtvu5v6kfm6p9%22%2C%22$$date%22:%222024-12-13T23:45:18.873Z%22%2C%22$$cookiesVersion%22:{%22name%22:%22movinmotion%20-%20application%20-%20test-fr%22%2C%22identifier%22:%2265018760bcc3dee4a5a87745%22}%2C%22mixpanel%22:false%2C%22$$completed%22:true}',
        path: '/',
        domain: '.app.test-1.movinmotion.net',
        secure: true,
        httpOnly: false,
        expiry: 1765669518,
        sameSite: 'None'
      })
      .cookies.set( {
        name: 'axeptio_authorized_vendors',
        value: '%2C%2C',
        path: '/',
        domain: '.app.test-1.movinmotion.net',
        secure: true,
        httpOnly: false,
        expiry: 1765669518,
        sameSite: 'None'
      })
      .cookies.set( {
        name: 'axeptio_all_vendors',
        value: '%2Cmixpanel%2C',
        path: '/',
        domain: '.app.test-1.movinmotion.net',
        secure: true,
        httpOnly: false,
        expiry: 1765669518,
        sameSite: 'None'
      });
  }
  return { [commandName]: command }
}
