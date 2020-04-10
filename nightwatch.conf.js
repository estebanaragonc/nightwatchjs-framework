module.exports = {
  src_folders: ["test"],
  page_objects_path: ["pages"],
  output_timestamp: true,
  selenium: {
      start_process: true,
      server_path: require('selenium-server').path,
      host: "127.0.0.1",
      port: 4444,
      cli_args: {
        //'webdriver.gecko.driver': require('geckodriver').path,
        'webdriver.gecko.driver': 'lib/firefox/geckodriver.exe',
        'webdriver.chrome.driver': require('chromedriver').path,        
      }
  },
        
  test_workers : {
    enabled : true, 
    workers : "auto"
  }, // perform tests in parallel where possible

  test_settings: {
    default: {
      launch_url: 'https://www.saucedemo.com/'
    },

    'selenium.chrome': {
      //extends: 'selenium',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    }, //end selenium.chrome
  
    'selenium.firefox': {
      //extends: 'selenium',
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ],
          }
        }
      }
    }//end selenium.firefox

  }
}