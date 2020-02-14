const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'Noboru, ';
var fs = require('fs');
var greet = "";


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author

  if (message.content === prefix + 'hi') {
    greet = JSON.parse('dict.json')
    message.channel.send('Hi' + sender);
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
