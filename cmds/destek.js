const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Bağış")
.setDescription("Bana Bağış Yaparak Destek Olabilirsin")
.addField("Patreon Donate", "[Bynogame](https://www.bynogame.com/destekle/genceryunuskurt)")
.addField("Steam Donate", "[Steam](https://steamcommunity.com/id/genceryunuskurt/)")
.setFooter("Gencer Yunus Kurt")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "destek"
}
