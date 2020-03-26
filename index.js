const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const prefixbot = process.env.prefixbot;
var fs = require('fs');
const greet = ["hi","hello","heyo","halo","hey","heya","ohayo","good morning","good afternoon","good night"]


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author.username;
  var msg = message.content.toLowerCase();

  if (msg.startsWith(prefix)) {
    for (var i = 0; i <= greet.length; i++) {
      if (msg.includes(greet[i])) {
          var startword = "";
          var lastword = "";
          var result = "";
          var startword = greet[i].charAt().toUpperCase();
          var lastword = greet[i].slice(1,greet[i].length);
          var result = startword.concat(lastword);
          message.channel.send(result + ", " + sender);
          break;
        };
      };
      var grammarscan = msg.split();
      if (grammarscan.includes("your") && grammarscan.includes("name")) {
          message.channel.send("My Name is Noboru Hikari")
      }
    } else if (msg.startsWith(prefixbot)) {
      if (msg.includes("help")) { //check if it has "help" in it
        message.channel.send("```n-ping ->  pong!\nn-help ->  command list\nn-CoV ->  no, just no.```")
      } else if (msg.includes("ping")) {
        message.channel.send("pong!")
      } else if (msg.includes("cov")) {
        message.channel.send("instead of making jokes about SARS-2, why you guys not donate to the charity to help the healthcare")
        message.channel.send("https://www.globalgiving.org/projects/coronavirus-relief-fund/")//link to the charity
      }
    };
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



client.login(process.env.token);
