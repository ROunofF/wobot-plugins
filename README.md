Wobot-Plugins
=============

This repository contains plugins for wobot, a hipchat bot written in Node.js by [cjoudrey](http://github.com/cjoudrey)

Steps to install wobot and plugins
 - install [node.js](http://nodejs.org/)
 - install wobot (npm install wobot)
 - clone this repository to the desired directory

To include a plugin in your bot use bot.loadPlugin();

    bot.loadPlugin('response', require('./plugins/response'));
    
Make sure to replace user id, password, and your room with your login info from http://hipchat.com).

Once this is all complete, run the following command in a terminal to launch your bot!

    node bot.js

As always, feel free to fork, add your own plugins, and submit pull requests. It would be really sweet to get an entire library of wobot plugins going
