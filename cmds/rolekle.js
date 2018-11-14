const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("RolEkle Komutu", "Kullanımı: r!rolekle [kullanıcı] [rol]")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`RolEkleme Komutu`)
  .addField("Description:", "Add role to member", true)
  .addField("Usage", "Kullanımı: r!rolekle [kullanıcı] [rol]", true)
  .addField("Örnek", "r!rolekle @rıdvan Üye")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bunu Yapmak İçin Yetkin Yok");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Bir Rol Belirt");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Böyle Bir Rol Bulamadım");

  if(rMember.roles.has(gRole.id)) return message.channel.send("Bu kullanıcı zaten bu role sahip.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`***I just gave ${rMember.user.username} the ${gRole.name} role!***`)

    message.delete();
  
}

module.exports.help = {
  name: "rolekle",
  description: 'Birine rol ekle',
  usage: 'rolekle <@user> <Role>'
}
