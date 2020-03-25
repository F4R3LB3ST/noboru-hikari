const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const prefixbot = process.env.prefixbot;
var fs = require('fs');
const greet = ["hi","hello","heyo","halo","hey","heya"]


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author;

  if (message.content.startsWith(prefix)) {
    var msgSp = message.content.split(" ");
    var alreadySent = false;
    for (var i = 0; i <= msgSp.length; i++) {
      console.log("i =" + i);
      console.log("msgSp = " + msgSp);
      console.log(msgSp[i]);
      for (var j = 0; j <= greet.length; j++) {
        if (message.content.includes(greet[j])) {
          message.channel.send("Hi " + sender);
          alreadySent = true;
          break;
        };
        console.log(greet);
        console.log(greet[j]);
      };
    };
  };
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
