/**
 * This is a simple wobot response plugin. 
 *
 * To create a new response for a given message, simply add the keyword
 * and the response to the array!
 */

var responses = {
	'help': 'Try !node lp-dac-02 for node information'
};

module.exports.load = function(bot) {
  bot.onMessage(/@nubot .*/i, respond);
};

var respond = function(channel, from, message) {
	console.log('Got message ' + message);
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
