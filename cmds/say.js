module.exports.run = async (bot, message, args) => {
    
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "say"
}
