module.exports = {
  src_folders: ["test"],

  webdriver: {
    server_path: require('chromedriver').path,
    port: 4444,
    start_process : true,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome"
      },
      launch_url: 'https://nightwatchjs.org'
    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        port: 4445,
        start_process: true,
        server_path: '/usr/bin/safaridriver'
      }
    },

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox'
      },

      webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('geckodriver').path
      }
    }
  }
}