module.exports = {
  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['theasia', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'The Asia')
      .end();
  }
};