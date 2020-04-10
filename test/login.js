module.exports = {

  // hooks
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {
    browser.end();
  },

  'Test with functions': function (browser) {
    var homepage =  browser.page.homepage_other();
    homepage.navigate().assert.title('Swag Labs');
    homepage.enterUsername('myUsername');
    homepage.enterPassword();
    homepage.click('@btnSubmit')
  }

  
};