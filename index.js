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
    for (var i = 0; i <= greet.length; i++) {
      if (message.content.includes(greet[i])) {
          message.channel.send(greet[i] + sender);
          break;
        };
      };
    };
} else if (message.content.startsWith(prefixbot)) {
  for (var i = 0; i <= greet.length; i++) {
    if (message.content.includes("random") {
        message.channel.send(math.random().1000);
        break;
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
