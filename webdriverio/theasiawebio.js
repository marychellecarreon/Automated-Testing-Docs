var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.theasia.com/')
    .getTitle().then(function(title) {  //load the initial title
        console.log(title);
      })
    .getUrl().then(function(url) {
      console.log(url);

    })
    .end();
