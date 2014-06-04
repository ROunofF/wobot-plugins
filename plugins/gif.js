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
  var arguments = message.split(' ');
  var query = '';
  for (var i = 1; i < arguments.length; i++) {
    query += arguments[i] + ' ';
  }
  request('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=25&offset=0&q=' + query, function (error, response, body) {
    if (!error) {
      var body = JSON.parse(body);
      var size = body.pagination.count;
      
      if (size == 0) {
        self.message(channel, '@' + from.split(' ').join('') + ' 0 \'' + query + '\' gifs were found :( try another search' );
      } else {
        var index = Math.floor(Math.random() * size);
        var gif = body.data[index].images.original.url;
        self.message(channel, '@' + from.split(' ').join('') + ' Here\'s a random \'' + query +  '\'  gif! ' + gif);
      }
    }
  });
  return true;
};
