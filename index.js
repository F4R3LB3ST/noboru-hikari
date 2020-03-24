const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const prefixbot = process.env.prefixbot;
var fs = require('fs');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author;

  if (message.content.startsWith(prefix)) {
    if (message.content.contains("hi")) {
    message.channel.send("Hi " + sender);
    message.channel.send("This message was sent at " + message.createdAt.toString());
  };
};
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
