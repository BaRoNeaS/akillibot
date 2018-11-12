const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Temizleme Komutu", "Usage: r!temizle <amount>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
  if(!args[0]) return message.channel.send("Silmem İçin Bi Sayı Girmelisin");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__ ${args[0]} Adet Mesaj Silindi .__**`).then(msg => msg.delete(2000));
});


}

module.exports.help = {
  name: "temizle"
}
