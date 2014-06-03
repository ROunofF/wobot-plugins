/**
 * A simple wobot plugin that gets a random
 * yomama joke when someone types in the command
 * !yomama. 
 *
 * My API hosted on tobinbrown.net simply grabs
 * the useful bits off of http://www.yomomma.info/
 */

var request = require('request');

module.exports.load = function(bot) {
  bot.onMessage('!yomama', yoMamaJoke);
};

var yoMamaJoke = function(channel, from) {
  var self = this;
  request('http://tobinbrown.net/api/yomama.php', function (error, response, body) {
    if (!error) {
      var data = JSON.parse(body);
      var string = '@' + from.split(' ').join('') + ' ' + data.joke;
      self.message(channel, string);
      console.log(string);
    }
  });
};
