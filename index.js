const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
const command = require('./command.json');
var smart = JSON.parse(fs.readFileSync('./smart.json', 'utf8'));
const smartread = require('./smart.json')
const prefix = process.env.prefix;
const prefixbot = process.env.prefixbot;
const greet = smart.greet;
const welcome = command.welcome;
const pokedesc = command.pokedesc;
var smartstatus = smart.status;
const myname = smart.name;
/*const changelog = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle('Changelog')
   .setDescription("Let's see what my developer is up to :grin:")
   .addFields(
   { name: 'Version - 1.0', value: '- n-smart got is not avaiable atm :disappointed:\n- added changelog :smile:\nmore update soon! ^_^' },
  )
   .setTimestamp()
*/

client.on('ready', () => {
  client.user.setStatus('online', "n-help")
  client.user.setPresence({
        game: {
            name: 'n-help',
        }
    });
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author.username;
  var msglow = message.content.toLowerCase();
  const collectorsmart = new Discord.MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 60000 });

  if (msglow == "n-smart") {
    if (!smartstatus) {
      smartstatus = true
      fs.writeFile('./userdata.json', JSON.stringify(smart), (err) =>{
          if (err) {
            console.error(err)
            message.channel.send("can't activate smart mode")
          } else {
            smart.status = smartstatus
            message.channel.send("smart mode on!");
         }
       })
     } else if (smartstatus) {
      smartstatus = false
      fs.writeFile('./userdata.json', JSON.stringify(smart), (err) =>{
          if (err) {
            console.error(err)
            message.channel.send("can't de-activate smart mode")
          } else {
            smart.status = smartstatus
            message.channel.send("smart mode off!");
          }
         })
      }
  } else if (!smartstatus) {
    if (msglow.startsWith(prefixbot)) {
        if (msglow.includes("help")) {
          message.channel.send("```n-ping\t\t-> Pong!\nn-help\t\t-> Command list\nn-changelog    -> See the change that happened on the bot\nn-jvd\t\t\t-> JoJo vs Dio custom dialogue (incomplete)\nn-purge\t\t-> Snap! half of the chat is gone...```")
        } else if (msglow.includes("ping")) {
          message.channel.send("pong!")
        } else if (msglow.includes("changelog")) {
          message.channel.send('```- n-smart is not avaiable atm :(\n- added changelog :D\nmore update soon! ^_^```');
        } else if (msglow.includes("use")) {
          message.channel.send('```- you can start with n-help\n- if you want to send a suggestion type n-suggest```');
        } /*else if (msglow.includes("suggest")) {
          message.channel.send("`if you can suggest something, suggest a good one, don't say rude words to my developer, i can scan ur message *pout*. What are going to write ?`");
          collectorsmart.on('collect', message => {
            message.331688530248073218.send();
              message.channel.bulkDelete(message).then(() => {
              message.channel.send(`Deleted ${message} message(s)`).then(msg => msg.delete(3000))
            });
          });
        }*/ else if (msglow.includes("purge")) {
                if (message.member.hasPermission('ADMINISTRATOR')) {
                  message.channel.send("how many messages you wanna delete ?")
                  const collectoradmin = new Discord.MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 10000 });
                  collectoradmin.on('collect', message => {
                      message.channel.bulkDelete(message).then(() => {
                      message.channel.send(`Deleted ${message} message(s)`).then(msg => msg.delete(3000))
                    })
                  })
              } else {
                  message.channel.send("You don't have the authority to do that")
              }
        } /* else if (msglow.includes("jvd")) {
          var playerdata = msglow.replace("n-jvd ","");
          if (playerdata.includes(" | ") && playerdata.includes("<") && playerdata.includes(">")) {
            let player1 = message.mentions.users.first().username;
            let player2 = message.mentions.users.last().username;
            let result = "";
            for (z in jojodial) {
              result = result.concat(jojodial[z]);
              message.channel.send()
              .then((msg) => {
                  msg.edit("`"+eval(result)+"`");
                };
              .setTimeout(function(){console.log("working");},1000);
            }
            message.channel.send(${player1} + ":	Yarou, " + player2 + "!");
            message.channel.send(player2 + ": Hoh? mukatte kuru no ka? nigesu ni kono dio ni chikazuite kuru no ka? Sekkaku sofu no Joseph ga, watashi no Za Warudo no shoutai yo Shiken shuryu chaimu chokuzen made mondai yo toitte iru jukensee no you na? Kisshi koita kibun de wo shietekure ta to yuu no ni?");
            message.channel.send(player1 + ": Chikadzu kana kya teme wo buchi no be senain de na");
            message.channel.send(player2 + ":	Hoho, de wa juubun chikazuku ga yoi");
            message.channel.send("(walks to each other)");
      } else {
            message.channel.send("mention 2 members and separate it with ' | ', example : 'n-jvd Jotaro | Dio'")
          } */
    }
  } else if (smartstatus) {
    msgsplit = msglow.split(" ");
    if (myname.includes(msgsplit[msgsplit.length-1])) {
      var name = msgsplit[msgsplit.length-1];
      var fletter = name.charAt(0).toUpperCase();
      var lletter = name.slice(1);
      name = fletter.concat(lletter);
      var done = false
      for (var a in msgsplit) {
        if (!done && !message.author.bot) {
          if (msgsplit[a] == "what") {
            msgsplit.shift();
            for (var b in msgsplit) {
              if (msgsplit[b] == "name") {
                message.channel.send("My name is Noboru Hikari");
                done = true;
                break;
              }
            }
          } else if (greet.includes(msgsplit[a])) {
            message.channel.send(`${greet[Math.floor(Math.random() * 5)]}  ${message.author.username}`);
            done = true
            break;
          } else if (done) {
            message.channel.send("Sorry, i couldn't understand, maybe i can't read your sentence");
            break;
          } else if (myname.includes(msgsplit[a])) {
            message.channel.send(`Yes, ${name} here`);
            done = true;
            break;
          }
          console.log(a);
        }
      }
    }
}
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(eval(welcome[Math.floor(Math.random() * 4)]));
})



client.login(process.env.token);





/*Dio:	Kakyoin no yatsu mo, sude ni shimatsu shite yatta so
	Polnaref wa dokozo ni hison de iru na, hah, do demo ii ga na
	Sugi wa Jotaro, kisama da!
Jotaro:	Yarou, Dio!
Dio:	Hoh? mukatte kuru no ka? nigesu ni kono dio ni chikazuite kuru no ka?
	Sekkaku sofu no Joseph ga, watashi no Za Warudo no shoutai yo
	Shiken shuryu chaimu chokuzen made mondai yo toitte iru jukensee no you na?
	Kisshi koita kibun de wo shietekure ta to yuu no ni?
Jotaro:	Chikadzu kana kya teme wo buchi no be senain de na
Dio:	Hoho, de wa juubun chikazuku ga yoi
	(walks to each other)
Jotaro:	ORA! (punch)
Dio:	(kick) Noroi noroi! Za Warudo wa saikyou no stando da, jikan wo tomezu tomo
	speedo to powaa to tte, omae no staa puratinum yori ue nano da!
Jotaro:	Ore no staa puratinum to onaji taipuu no stando da na
	Enkyori ya ikenai ga, pawaa to semitsu no ugoki ga dekiru
Dio:	Kisama yori dono urai Za Warudo stando pawaa ga suyoi ka choi to tameshite mita katta
	Ma tamesu hodo demo nakatta ya dana
Jotaro:	Tamesu tte yu no wa, kizu demo naranai naderu dake no koto yu no ka?
	Ni-man yen no shitazu mon yabureta ga yo na
Dio:	Doushite Joesta ke to yu no wa ko makezu kirai nano da?
	Hah, kudaran chohatsu ni no tte yatte, mo chotto dake tameshite yaru ka
	(fight) (clash)
Jotaro:	ORA! ORA! (punch) ORAORAORAORAORAORAORAORA (rampaging punches) (clash)
	Cih
Dio:	Rashuu no hayasa kurabe ka?
	MUDAMUDAMUDAMUDAMUDA (rampaging punches)
Jotaro:	ORAORAORAORAORAORA (rampaging punches)
Dio:	(fake punch) (punch)
	Heheheheh, yahari waga za Warudo no ho ga pawaa semitsu sa tomo ni ue da
	Mo wakatta, manzoku da, iki ni todome wo sashitte kureru
Jotaro:	OAHHHHH
Dio:	Joestaa no ketto mono dake wa, tekagen sezu ni iki ni korosu to kimette ita
Jorato:	ORAORAORAORAORA (rampaging punches)
Dio:	Todome wo sasu no wa yahari Za Warudo no shin no nouryoku
	ZA WARUDO! TOKI WO TOMARE! (time stops)
	Kore de, Joestaa no ketto mo yo yaku togirete shimau to yu wake dana
	Waga unmei ni arawareta tenteki domo yo, sara mada
Jotaro:	(finger moves)
Dio:	Na- NANI?! ima ugoita zo, koitsu baka na, koitsu no yubi ga ugoita zo!
	Masaka, masaka! masaka, onaji?! Za Warudo to Staa Puratinum wa onaji taipu no stando
	Koitsu, miete iru no ka? sore tomo isshiki sezu tte wo ugokaseta dake nano ka?
	Cih, jikan gire da (time moves)
	Miete iru no ka? (Jotaro looks) MIETE IRU NO KA TO KITTE IRU NO DA JOTARO!!
Jotaro:	Saa na, nano koto ka wakarane na, Dio
Dio:	Ii darou, docchi demo yo karo, toki no tomatta sekai de miete iru to miete inai to!
	Waga Za Warudo to onaji ugokeru no nara, ugokeru tokoro misete moraou de wa nai ka!
	So, hajimete toki wo tomeru keiken no shita no wa han toshi mae no koto da!
Dio:	Stando no pawaa to speedo wo tameso tomo, buka ni sandan juu wo utase
	Dangan wo tsumamitoro ta shuunkan, isshun, nani mo kamo sessishita yo ni mieru koto ni hajimata
	Saisho wa genkaku dato omotta, daga Za Warudo wa sono sessishite iru kuukan wo
	Dangan wo mawari konde karada zentai de ugoku koto ga dekita
	Soshite, dangan wo tsumanda
	Kono Dio wa, subete no sebutsu ya subete no standotsukai yo bucchigiri de choetsushitan da!
	Sohite ima de wa go byou to dandan nagaku toki wo tomette irareru
	Jotaro! kisama no pawaa ga dono tte no mono ka, hokuto haiken shite yarou!
	ZA WARUDO! TOMARE TOKI YO! (time stops)
Jotaro:	(finger moves)
Dio:	Heheheh, hmhohohoh, nhahahaha! HAHAHAHAHA!, hngehemhehe
	(takes magnet from his hand) Jishoku wo tsukete ita no?
	Saki no pawaa kurabe no toki ka? saifu ga techou to tomegane kara totta jishoku no yo dana
	Ha, mama to damasareta yo, nukeme no nai yatsu da, SHIKASHI!
	Konna ikasama no toriku wa, kisama no stando ga toki no naka wo ugokukenu to yu shoumei!
	Juumyou ga honno sukoshi nobita ni suginu wa! Kondo koso, SHINE JOTARO! (punch)
Jotaro:	(hand moves) (stand comes out) (punch)
Dio:	NANI????!!!!
Jotaro:	(stops)
Dio:	Koitsu hontou wa ugokeru! yahari isshun daga ugokeru!
	Jishoku wa miseru tame de wa naku, ugokenai to omowasete ore wo juubun hikitsukeru tame no toriku!
	Koto no aro ni, kono Joestaa no matsue ga, waga tomatta toki no sekai ni, niru mon shite kuru to wa!
	(time moves)
Jotaro:	isshun wa ugoketta, isshun wa na, shikashi, yare yare, panchi ipatsu ttedo no isshun dake da!*/
