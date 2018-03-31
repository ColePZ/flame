const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const TOKEN = "NDI5MzA3OTE2NTM3OTU0MzE1.DZ_vwA.JUBHP9eDO-YMsGML4XGvPtODNrg"
const PREFIX = "??"
const Client = new Discord.Client()


var fortunes = [
  "Yes", "No", "Maybe"
];

var dice = [
  "1", "2", "3", "4", "5", "6"
];

var flip = [
  "Heads!", "Tails!"
];

var truefalse = [
  "True!", "False!"
];

var bot = new Discord.Client();


bot.on("ready", function() {
     console.log("Ready!")
     bot.user.setActivity(bot.guilds.size, ' Guilds - ??help', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});


bot.on("message", function(message) {
    console.log(message.log)
    if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");


  switch (args[0]) {
  case "ping":
    message.channel.sendMessage("Pong!");
    break;
  case "info":
       message.channel.sendMessage("Flame, a bot by HiddenCale.");
       break;
  case "8ball":
     if (args[1]) {
             message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
          } else {
     message.channel.sendMessage("Can't Read that");
     }
     break;
  case "myinfo":
  var embed = new Discord.RichEmbed()
     .addField("Name", message.author.tag)
     .addField("Avatar", message.author.avatarURL)
     .setColor(0xff0000)
     .setFooter("Flame, made with love by HiddenCale")
     .setThumbnail(message.author.avatarURL)
     message.channel.sendEmbed(embed);
     break;
  case "hostserver":
     message.channel.sendMessage("The Host Discord is The Quite Dim Brigade, The event/command host is Heroku. The code is open source on GitHub (Its On ColePZ)")
    break;
    case "devinfo":
    var embed = new Discord.RichEmbed()
       .addField("Name", "HiddenCale#0001")
       .addField("Avatar", "https://cdn.discordapp.com/avatars/365183865087721473/58731e838c54f44e2db5a77875653f94.png?size=2048")
       .addField("Email", "gdechoxxa@gmail.com")
       .setColor(0xff0000)
       .setFooter("Flame, made with love by HiddenCale")
       .setThumbnail("https://cdn.discordapp.com/avatars/365183865087721473/58731e838c54f44e2db5a77875653f94.png?size=2048")
       message.channel.sendEmbed(embed);
       break;
       case "dice":
          if (args[1]) {
                  message.channel.sendMessage(dice[Math.floor(Math.random() * dice.length)]);
               } else {
          message.channel.sendMessage("You forgot 'go'");
          }
          break;
        case "coinflip":
          if (args[1]) {
                  message.channel.sendMessage(flip[Math.floor(Math.random() * flip.length)]);
               } else {
          message.channel.sendMessage("You forgot 'flip'");
          }
          break;
          case "truefalse":
          if (args[1]) {
                  message.channel.sendMessage(truefalse[Math.floor(Math.random() * truefalse.length)]);
               } else {
          message.channel.sendMessage("You forgot to put a question");
          }
          break;
      case "guilds":
      message.channel.sendMessage(bot.guilds.size, ' Guilds')
      break;
      case "help":
      var embed = new Discord.RichEmbed()
         .addField("ping", "Play Ping Pong!")
         .addField("8ball", "See your future")
         .addField("myinfo", "See info about yourelf")
         .addField("hostserver", "See info about host servers")
         .addField("devinfo", "See info about the developer")
         .addField("dice go", "Do dice with the bot!")
         .addField("coinflip flip", "Heads OR Tails!")
         .addField("truefalse <question>", "True or False!")
         .addField("guilds", "Amount of servers that Flame is in!")
         .addField("help", "List of commands")
         .addField("Invite Link", "https://discordapp.com/oauth2/authorize?client_id=429307916537954315&scope=bot&permissions=36719616")
         .setColor(0xff0000)
         .setFooter("Flame, made with love by HiddenCale")
         message.channel.sendEmbed(embed);
         break;

    default:
         message.channel.sendMessage("Invalid Command");
  }
});


client.login(process.env.BOT_TOKEN)
