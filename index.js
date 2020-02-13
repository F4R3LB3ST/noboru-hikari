const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'Noboru, ' || 'Hikari, ';
var fs = require('fs');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author

  if (message.content === prefix + 'hi') {
    message.channel.send('kontol');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
