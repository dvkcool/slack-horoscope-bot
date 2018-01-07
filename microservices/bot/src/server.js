require('babel/register');
const http = require('http');
var request = require('request');
var Slack = require('slack-client');
try {
  const fs = require('fs');
  const token = process.env.SLACK_TOKEN;
  var slack = new Slack(token, true, true);

  var makeMention = function(userId) {
    return '<@' + userId + '>';
  };

  var isDirect = function(userId, messageText) {
    var userTag = makeMention(userId);
    return messageText &&
    messageText.length >= userTag.length &&
    messageText.substr(0, userTag.length) === userTag;
  };

  var horoscope="";
  function gethoroscope(dur, sign, channel, user) {
    request({
        url: "http://horoscope-api.herokuapp.com/horoscope/"+dur+'/'+sign,
        method: 'GET',
      }, function(error, response, body) {
      if (error) {
        console.log('Error sending message to user: ' + error);
      } else {
        //extract body
        exr= JSON.parse(body);
        horoscope = exr.horoscope;
        console.log(horoscope);
        channel.send( user.real_name + ', Your horoscope is\n  ' + horoscope);
      }
      });
  }
  slack.on('message', function(message) {
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var user = slack.getUserByID(message.user);

    if (message.type === 'message' && isDirect(slack.self.id, message.text)) {
      //Trimmed message
      var trMessage = message.text.substr(makeMention(slack.self.id).length+1).trim();
      var query = trMessage.split(" ");
      gethoroscope(query[0], query[1], channel, user);

    }
  });

  slack.login();
  http.createServer(function(req, res) {
  res.end('Hi there, Lets get started');
  }).listen(8080);

} catch(error) {
    console.log('Retry');
    return;
}
