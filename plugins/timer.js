/**
 */

var request = require('request');


module.exports.load = function(bot) {
  bot.onMessage(/^\!start ([A-Za-z0-9-\.]+)$/i, start);
  bot.onMessage(/^\!stop ([A-Za-z0-9-\.]+)$/i, stop);
};

var interval;
var interval_start;
var start = function(channel, from, message, matches) {
  console.log('Got !start' + message);
  var self = this;
  var name = matches[1];
  self.message(channel, '/code ' + 'Timer ' + name + ': Started');
  interval_start = new Date();
  interval = setInterval(function(name) {
    var d = new Date();
    var elapsed = d - interval_start;
    self.message(channel, '/code ' + 'Timer ' + name + ': Tick! Tack! we have been running for: ' + Math.floor(elapsed/1000) + 's ');
  }, 5000, name);
  return true;
};

var stop = function(channel, from, message, matches) {
  console.log('Got !stop' + message);
  var self = this;
  var name = matches[1];
  self.message(channel, '/code ' + 'Timer ' + name + ': stopped');
  clearInterval(interval);
  return true;
};
