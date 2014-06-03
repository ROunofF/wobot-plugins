/**
 * This plugin will display the current weather condition
 * and forcast for the current day with the command
 * !weather ZIPCODE. This plugin utilizes the yahoo weather api.
 */

var request = require('request');

module.exports.load = function(bot) {
  bot.onMessage(/^\!weather ([0-9]+)$/i, weather);
};

var weather = function(channel, from, message, matches) {
  var self = this;
  request('http://query.yahooapis.com/v1/public/yql/jonathan/weather?format=json&zip=' + matches[1], function (error, response, body) {
    if (!error) {
      var data = JSON.parse(body);
      var results = data.query.results.channel;
      var condition = results.item.condition;
      var forecast = results.item.forecast[0];
      var location = results.location;
      var response = 'It is currently ' + condition.temp + '° and ' + condition.text + ' in ' + location.city + ', ' + location.region + '.\nToday\'s Forecast: ' + forecast.high + '° high, ' + forecast.low + '° low, ' + forecast.text;
      self.message(channel, '@' + from.split(' ').join('') + ' ' + response);
      console.log('@' + from.split(' ').join('') + ' ' + response);
    }
  });
  return true;
};