const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :thumbsup: `)
  const linqo = `https://habbofont.net/font/neon_green/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Neon Yeşil Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yesilneon','neonyesil'],
    permLevel: 0
}

exports.help = {
    name: 'neonyeşil',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'neonyesil <yazı>'
}