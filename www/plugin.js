var exec = require('cordova/exec');

var PLUGIN_NAME = 'splashscreen';

var splash = {
  setContent: function (appName, url) {
    exec(null, null, PLUGIN_NAME, "setContent", [appName, url]);
  },
  onDeepLink: function(successCallback) {
    exec(successCallback, null, PLUGIN_NAME, "onDeepLink", []);
  },
  clearPrefs: function(successCallback) {
    exec(successCallback, null, PLUGIN_NAME, "clearPrefs", []);
  },
  setImportProgress: function(currentCount, totalCount) {
    exec(null, null, PLUGIN_NAME, "setImportProgress", [currentCount, totalCount]);
  },
  getActions: function(successCallback) {
    exec(successCallback, null, PLUGIN_NAME, "getActions", []);
  },
  markImportDone: function(successCallback) {
    exec(successCallback, null, PLUGIN_NAME, "markImportDone", []);
  },
};


module.exports = splash;
