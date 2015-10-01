/**
 */

var request = require('request');


module.exports.load = function(bot) {
  bot.onMessage(/^\!node ([A-Za-z0-9-\.]+)$/i, node);
  bot.onPrivateMessage(/^\!node ([A-Za-z0-9-\.]+)$/i, node);
};

var node = function(channel, from, message, matches) {
  console.log('Got !node' + message);
  var self = this;
  var dashboardUrl = 'http://release.dev.lapresse.ca/api/nodes';
  request.get(dashboardUrl, function (error, response, body) {
    if (!error) {
      var results = JSON.parse(body);
        //results.data.foreach(nodes)
      console.log(results);
      var response = '';
      if(results.data == undefined) {
        response = 'Node introuvable ' + matches[1];
      } else {
        for (var i = 1; i < results.data.length; i++) {
          if ( results.data[i].serverHostname == matches[1]) {
            var d = results.data[i]
            response += 'Node: ' + d.serverHostname + ' Env: '  + d.environment + ' Package: ' + d.packageName + ' Commit: ' + d.commitNumber + "\n";

          }
        }
        if (response.length == 0) {
          response = 'Node : ' + matches[1] + ' introuvable ';
        }
      }
      self.message(channel, '/code ' + response);
    }
  });
  return true;
};
