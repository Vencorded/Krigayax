const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :thumbsup: `)
  const linqo = `https://habbofont.net/font/neon_pink/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Neon pembe Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pembeneon','pembeyesil'],
    permLevel: 0
}

exports.help = {
    name: 'neonpembe',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'neonpembe <yazı>'
}