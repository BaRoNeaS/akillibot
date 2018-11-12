const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let inline = true
    let bicon = bot.user.displayAvatarURL;
 
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("BAĞIŞ BOT")
    .setThumbnail(bicon)
    .addField("Bize Destek Olabilirsin", "<@350261026031271938>")
    .addField("Bot Komutları", "Özel komutlar", inline)
    .addField("Xp Sistemi", "İsteğe Bağlı", inline)
    .addField("Özel Bot", "Hyr,Hekez Davet Edebilir")
    .addField("Bağış Linki","[Bağış Linki](https://www.bynogame.com/destekle/genceryunuskurt)")
    .addField("Yardım", "Herhangi bir sorunuz varsa Destek Sunucusunda sormaktan çekinmeyin. [Yardım Sunucusu](https://discord.gg/Kxj4edY)")

    message.channel.send(embed)

}
    module.exports.help = {
        name: "bağış"
}
