const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const prefixbot = process.env.prefixbot;
var fs = require('fs');
const greet = process.env.greet;


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author;

  if (message.content.startsWith(prefix)) {
    var msgSp = message.content.split(" ");
    for (var i = 0; i <= msgSp.length; i++) {
      console.log(i)
      for (var j = 0; j <= greet.length; i++) {
        var msgSpT = msgSp[i].toString()
        var greetT = greet[j].toString()
        if (msgSpT[i].equals(greetT[j]))
        message.channel.send("Hi " + sender);
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
