Wobot-Plugins
=============

This repository contains plugins for wobot, a hipchat bot written in Node.js by [cjoudrey](http://github.com/cjoudrey). If you would like to contribute your own plugins, simply create a fork, add your plugins, and submit a pull request!

#Steps to create your own wobot!
 - [install node.js and npm](README.md#install-nodejs-and-npm)
 - [install wobot and other modules](README.md#install-wobot-and-other-modules)
 - [create your own bot!](README.md#create-your-own-bot)
 - [configure your bot](README.md#configuring-your-bot)
 - [load plugins](README.md#load-plugins)
 - [run your bot](README.md#run-your-bot)

## Install Nodejs and NPM

Visit the [node.js downloads page](http://nodejs.org/) to download and install the correct version of Node.js for your system.

To install node.js and node package manager on Ubuntu, simply enter the following commands in a terminal

    sudo apt-get install nodejs
    sudo apt-get install npm
    
## Install wobot and other modules

To install wobot and other modules required by the plugins, we will use node package manager. To install these, open up a command line or terminal and enter the following commands.

    npm install wobot
    
Some of my plugins use an API, and require the node module, request, which allows getting data rom external APIs. To install it, run the following command

    npm install request
    
## Create your own bot

To create your own bot, all you need to do is fork this repository in the desired directory. To do this, open up a command line or terminal in the desired directory and run the following command.

    git clone http://github.com/Brobin/Wobot-Plugins.git
    
This will download the basic bot and my plugins to that directory

## Configuring your bot

Once you have completed the previous steps, your bot.js file should look like this

```
var Bot = require('wobot').Bot;

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
```

There are 3 things that you need to change to get the bot working on your channel. All of them can be access from your hipchat group admin.
- user_id, the unique user id
- password, your user's password
- your_rooom, the room you'd like it to join

## Load Plugins

To include a plugin in your bot use bot.loadPlugin(); The first parameter is its name, and the second is a require() with the relative path to the file.

    bot.loadPlugin('response', require('./plugins/response'));
    
## Run your Bot

Once this is all complete, run the following command in a terminal to launch your bot!

    node bot.js
    
## Add your own plugins

As always, feel free to fork, add your own plugins, and submit pull requests. It would be really sweet to get an entire library of wobot plugins going


