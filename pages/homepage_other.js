var homePageCommands = {
  enterUsername: function(username) {
    this.api.pause(1000);
    console.log(`Entering username : ${username}` );
    return this.waitForElementVisible('@txtUsername', 1000)
      .setValue('@txtUsername', username, function(response){
        console.log('dummy string1');
      });
  },
  enterPassword: function(password) {
    this.api.pause(1000);
    console.log(`Entering password : ${password}` );
    return this.waitForElementVisible('@txtPassword', 1000)
      .setValue('@txtPassword', password);
  }
};

module.exports = {
  url: 'https://www.saucedemo.com/',
  commands: [homePageCommands],
  elements: {
    //#region Textboxes
    txtUsername: {
      selector: '#user-name'
    },
    txtPassword: {
      selector: '#password'
    },
    //#endregion Textboxes

    //#region Labels
    //#endregion Labels

    //#region Buttons
    btnSubmit: {
      selector: 'input[type=submit]'//,
      //locateStrategy: 'xpath'
    }
    //#endregion Buttons
    
  }    
  };