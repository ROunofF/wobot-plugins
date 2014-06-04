/**
 * This plugin will display a random gif from the giphy
 * api based on a search term.
 */

var request = require('request');

module.exports.load = function(bot) {
  bot.onMessage(/!gif .*/, gif);
};

var gif = function(channel, from, message) {
  var self = this;
  request('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=25&offset=0&q=' + message.split(' ')[1], function (error, response, body) {
    if (!error) {
      var body = JSON.parse(body);
      var size = body.pagination.count;
      if (size == 0) {
        self.message(channel, '@' + from.split(' ').join('') + ' 0 \'' + message.split(' ')[1] + '\' gifs were found :( try another search' );
      } else {
        var index = Math.floor(Math.random() * size);
        var gif = body.data[index].images.original.url;
        self.message(channel, '@' + from.split(' ').join('') + ' Here\'s a random \'' + message.split(' ')[1] +  '\'  gif! ' + gif);
      }
    }
  });
  return true;
};
