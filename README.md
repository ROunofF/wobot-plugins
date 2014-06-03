Wobot-Plugins
=============

This repository contains plugins for wobot, a hipchat bot written in Node.js by [cjoudrey](http://github.com/cjoudrey)

Steps to install wobot and plugins
 - install [node.js](http://nodejs.org/)
 - install wobot (npm install wobot)
 - clone this repository to the desired directory

To include a plugin in your bot use bot.loadPlugin(); The first parameter is its name, and the second is a require() with the relative path to the file.

    bot.loadPlugin('response', require('./plugins/response'));
    
Some of my plugins use an API, and require the node module, request, which allows getting data rom external APIs. To install it, run the following command

    npm install request

Once this is all complete, run the following command in a terminal to launch your bot!

    node bot.js

As always, feel free to fork, add your own plugins, and submit pull requests. It would be really sweet to get an entire library of wobot plugins going
