nightwatch_config = {
  selenium: {
    "start_process": false,
    "host": "hub-cloud.browserstack.com",
    "port": 80
  },
  test_settings:{
    default: {
      desiredCapabilities: {
        "browser": "chrome",
        "name": "Bstack-[Nightwatch] Local Test",
        "browserstack.user": "drapalamathieu1",
        "browserstack.key": "NpQEfPspALACt1YatSv6",
      }
    }
  }
};

for( var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;