module.exports = {
  //disabled : true,
  '@tags': ['website'],

  beforeEach: function(client, done) {
    client.url('http://nightwatchjs.org?beforeEach', function() {
      done();
    });
  },

  'Demo test NightwatchJS.org' : function (client) {
    client
      .waitForElementVisible('body', 1000)      
  },

  'Finished': function(client) {
    client
      .perform(() => {
        console.log('[perform]: Finished Test:', client.currentTest.name)
      })
      .end();
  }
};