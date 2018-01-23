var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options); //used to run all the test

client
    .init()  //initialize the browser
    .url('https://duckduckgo.com/') //loads the website
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log(title);

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();
