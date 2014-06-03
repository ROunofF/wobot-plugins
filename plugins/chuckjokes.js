/**
 * A simple wobot plugin that will display a random
 * Chuck Norris joke on the command !chuck
 */

var request = require('request');

module.exports.load = function(bot) {
  bot.onMessage('!chuck', chuckJoke);
};

var chuckJoke = function(channel, from) {
  var self = this;
  request('http://api.icndb.com/jokes/random', function (error, response, body) {
    if (!error) {
      var data = JSON.parse(body);
      var string = '@' + from.split(' ').join('') + ' ' + data.value.joke;
      self.message(channel, string);
      console.log(string);
    }
  });
};

