module.exports = {
  src_folders: ["test"],
  page_objects_path: ["pages"],
  webdriver: {
    server_path: require('chromedriver').path,
    port: 9516,
    start_process : true,
    cli_args: [
      '--port=9516'
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        loggingPrefs: { 'browser': 'ALL' }
      },
      launch_url: 'https://www.saucedemo.com/'
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