/**
 * This is a simple wobot response plugin. 
 *
 * To create a new response for a given message, simply add the keyword
 * and the response to the array!
 */

var responses = {
	'cookie':'I LOVE COOKIES!!!',
	'ping':'pong',
	'fireworks':'*pow *boom FIREWOKS!!!',
	'wat':'Turn down for what?!',
	'hello':'Hello!'
};

module.exports.load = function(bot) {
  bot.onMessage(/.*/, respond);
};

var respond = function(channel, from, message) {
	if (responses[message] != undefined) {
		var self = this;
  		self.message(channel, '@' + from.split(' ').join('') +  ' ' + responses[message]);
  		console.log(channel + ' : @' + from.split(' ').join('') + ' ' + responses[message])
	}
  return true;
};
