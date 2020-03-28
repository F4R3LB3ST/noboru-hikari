const Discord = require('discord.js');
const client = new Discord.Client();
const dict = require('./dict.json');
const prefix = dict.prefix;
const prefixbot = process.env.prefixbot;
var fs = require('fs');
const greet = dict.greet;


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var sender = message.author.username;
  var msglow = message.content.toLowerCase();

  if (msglow.includes(prefix)) {
    for (var i = 0; i <= greet.length; i++) {
      if (msglow.includes(greet[i])) {
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
      if (msglow.includes("your") && msglow.includes("")) {
          message.channel.send("My Name is Noboru Hikari")
      }
    } else if (msglow.startsWith(prefixbot)) {
      if (msglow.includes("help")) {
        message.channel.send("```n-ping ->  pong!\nn-help ->  command list\nn-CoV ->  no, just no.```")
      } else if (msglow.includes("ping")) {
        message.channel.send("pong!")
      } else if (msglow.includes("cov")) {
        message.channel.send("instead of making jokes about SARS-2, why you guys not donate to the charity to help the healthcare")
        message.channel.send("https://www.globalgiving.org/projects/coronavirus-relief-fund/")
      } else if (msglow.includes("jvd")) {
        var playerdata = msglow.replace("n-jvd","");
        console.log(playerdata);
        if (playerdata.includes(" | ") && playerdata.includes("<") && playerdata.includes(">")) {
              player = message.mentions.users;
              console.log(player);
              player1 = player[0].username;
              player2 = player[1].username;
              message.channel.send(player2 + ": Kakyoin no yatsu mo, sude ni shimatsu shite yatta so Polnareff wa dokozo ni hison de iru na, hah, do demo ii ga na. Tsugi wa "+ player1 +", kisama da!");
              message.channel.send(player1 + ":	Yarou, " + player2 + "!")
      } else {
              message.channel.send("mention 2 members and separate it with ' | ', example : 'n-jvd Jotaro | Dio'")
          }
        }
      }
  });

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});



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
