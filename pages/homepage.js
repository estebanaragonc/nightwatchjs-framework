

var homePageCommands = {
  enterUsername: function() {
    this.api.pause(1000);
    console.log ('Entering username : ');
    return this.waitForElementVisible('@txtUsername', 1000)
      .setValue('@txtUsername','holis');
  },
  enterPassword: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@txtPassword', 1000)
      .setValue('@txtPassword','holiaaaaaaaaaaaas');
  }
};

module.exports = {
  url: 'https://www.saucedemo.com/',
  commands: [homePageCommands],
  sections: {
      login_container: {
          selector: '#login_button_container',
          elements: {
            txtUsername: {
              selector: '#user-name'
            },
            txtPassword: {
              selector: '#password'
            },
            btnSubmit: {
              selector: '.btn_action]'//,
              //locateStrategy: 'xpath'
            }
          }

      }
  }
  };