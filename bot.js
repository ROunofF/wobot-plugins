/**
 * Starter bot. Simply change the user_id, password, and your_room
 * to match your user and room.
 */

var Bot = require('wobot').Bot;
var fs = require('fs');

var bot = new Bot({
  jid: 'user_id@chat.hipchat.com/bot',
  password: 'password',
});

bot.connect();

bot.onConnect(function() {
  this.join('your_room@conf.hipchat.com');
});

bot.onError(function(text) {
	var log = fs.createWriteStream('log.txt', {'flags': 'a'});
	log.write(new Date().toString() + ': ERROR: ' + text + '\n');
});

bot.loadPlugin('response', require('./plugins/response'));
