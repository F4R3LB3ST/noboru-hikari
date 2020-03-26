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
  var msg = message.content.toLowerCase();

  if (msg.startsWith(prefix)) {
    for (var i = 0; i <= greet.length; i++) {
      if (msg.includes(greet[i])) {
          var startword = greet[i].split();
          var result = "";
          startword[0] = startword[0].toUpperCase();
          for (word of startword) {
            var result =+ word
            return result;
          };
          message.channel.send(result + " " + sender);
          break;
        };
      };
    } else if (msg.startsWith(prefixbot)) {
      if (msg.includes("help")) {
        message.channel.send("```n-ping ->  pong!\nn-help ->  command list\nn-CoV ->  no, just no.```")
      }
    };
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
