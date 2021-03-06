'use strict';
var helpers = require(__dirname + '/../helpers/');

function thanks(event) {
  // jscs:disable
  var answers = [
    'You\'re welcome, <@' + event.userID + '> ! `^w^`',
    'I-It was nothing, <@' + event.userID + '>. >w<',
    '**[whines shyly, blushing]**\nY-you\'re welcome, <@' + event.userID + '>~ >w<', // jshint ignore:line
    'I-I\'m sure you would\'ve done the same, <@' + event.userID + '>! :3'
  ];
  // jscs:enable
  var msg = helpers.randomArray(answers);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg
  });
  helpers.statistics(event, 'thanks');
}
module.exports = {
  name: 'thanks',
  author: 'thattacoguy',
  syntax: 'thanks',
  hidden: true,
  patterns: [/thank(s| you)/i],
  description: 'danke',
  command: thanks
};
