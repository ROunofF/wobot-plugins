/**
 * This simple plugin responds to the !help command with all of the available
 * commands. You will have to manually add each one as you use more plugins.
 */

module.exports.load = function(bot) {
  bot.onMessage('!help', help);
};

var help = function(channel, from, message) {
	var self = this;
	var string = '!gif \'search terms\' - displays a random gif based on your search\n' 
	+ '!weather ZIPCODE - displays the weather\n' 
	+ '!chuck - displays a chuck norris joke\n' 
	+ '!yomama - displays a yomama joke';
	self.message(channel, string)
	return true;
}
