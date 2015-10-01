/**
 * Starter bot. Simply change the user_id, password, and your_room
 * to match your user and room.
 */


var Bot = require('wobot').Bot;
var fs = require('fs');


  //"jid": "76745_989081@chat.hipchat.com/nubot",
var conf    = fs.readFileSync('./conf/bot.json');
var opts    = JSON.parse(conf);

var bot = new Bot(opts);

bot.connect();

bot.onConnect(function() {
  this.join('76745_labday-dashboardrelease@conf.hipchat.com');
});

bot.onError(function(text) {
	var log = fs.createWriteStream('log.txt', {'flags': 'a'});
	log.write(new Date().toString() + ': ERROR: ' + text + '\n');
});

bot.loadPlugin('response', require('./plugins/response'));
bot.loadPlugin('weather', require('./plugins/weather'));
