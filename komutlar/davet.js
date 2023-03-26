 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcım ", " <@^ Lykia#5185>")

.setDescription(`**Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=810129565476978708&scope=bot&permissions=8) \n**Destek Sunucusu ;** [TIKLA](https://discord.gg/JGp7JY7fSj)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'anisenpai',
  usage: 'davet'
}; 