/**
 * This is a simple wobot response plugin. 
 *
 * To create a new response for a given message, simply add the keyword
 * and the response to the array!
 */

var responses = {
	'cookie':'I LOVE COOKIES!!!',
	'cookies':'I LOVE COOKIES!!!',
	'ping':'pong',
	'fireworks':'*pow *boom FIREWOKS!!!',
	'wat':'Turn down for what?!',
	'hello':'Hello!'
};

module.exports.load = function(bot) {
  bot.onMessage(/.*/, respond);
};

var respond = function(channel, from, message) {
	var messageSplit = message.split(' ');
	for ( var i = 0; i < messageSplit.length; i++) {
		var word = messageSplit[i];
		if (responses[word] != undefined) {
			var keyword = responses[messageSplit[i]];
			var self = this;
	  		self.message(channel, '@' + from.split(' ').join('') +  ' ' + keyword);
	  		console.log(channel + ' : @' + from.split(' ').join('') + ' ' + keyword);
		}
	}
  return true;
};
