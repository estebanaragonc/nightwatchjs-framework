module.exports = {
  'Test with functions': function (browser) {
    var homepage =  browser.page.homepage_other();
    homepage.navigate().assert.title('Swag Labs');
    homepage.enterUsername('myUsername');
    homepage.enterPassword();
    homepage.click('@btnSubmit')
    
    //loginSection.click('@btnSubmit');
    
    
    browser.getLog('browser', function(logEntriesArray) {
      if (logEntriesArray.length) {
        console.log('Log length: ' + logEntriesArray.length);
        logEntriesArray.forEach(function(log) {
          console.log(
            '--> [' + log.level + '] ' + log.timestamp + ' : ' + log.message
          );
        });
      }
    });
    browser.end();
  },

  /* 'Test Homepage Other': function (browser) {
    var homepage =  browser.page.homepage_other();
    homepage.navigate().assert.title('Swag Labs');
    
    console.log('hello world');
    homepage.waitForElementVisible('@txtUsername')
    .setValue('@txtUsername', 'standard_user')
    .setValue('@txtPassword', 'secret_sauce')
    .assert.visible('@btnSubmit')
    .click('@btnSubmit')
    
    //loginSection.click('@btnSubmit');
    browser.end();
  } */

};