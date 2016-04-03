var helpers = require('./../helpers');
var commands = require('./index');
var config = require('./../config.json');
function help(bot, user, userID, channelID, message) {
  helpers.statistics('help', user, userID, channelID, message);
  var msg = '**O-oh! You need help?** Here\'s a list of commands. :3 \n \n';
  var commands = require('./index');
  for (var key in commands.triggers) {
    var command = commands.triggers[key];
    //console.log(command);
    if (command.typeOf != 'text' || command.hidden)
      continue;
    msg += '`' + config.trigger + command.name + '`';
    msg += ' - ' + command.description;
    msg += '\n';
  }
  //console.log(command);
  msg += '\nUse them, don\'t abuse them! :green_heart:';
  msg += '\nI-if you find an issue with WolfBot or want to submit an idea, feel free to use WolfBot\'s GitHub issues page.';
  msg += '\n<https://github.com/TacoWolf/WolfBot/issues> :green_heart:';
  bot.sendMessage({
    to: userID,
    message: msg
  });
}
module.exports = { command: help };