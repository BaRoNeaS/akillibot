const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot İsmi", `<:bot:425631858265423883> ${bot.user.username}`, inline)
    .addField("Bot Sahibi", "<:odar:424890572919013397> <@309779535623094273>", inline )
    .addField("Server", `🛡 ${servsize}`, inline)
    .addField("Kanal", `📁 ${chansize}`, inline)
    .addField("Kullanıcı", `<:user:424958082691629057> ${usersize}`, inline)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
