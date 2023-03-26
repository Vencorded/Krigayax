const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://safebooru.org/images/118/968c5b9f042a5262c8c8628cd52a7a6a557e525d.gif?117786","https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif","https://imgur.com/fm49srQ","https://cdn.discordapp.com/attachments/810793063647543331/810818575178399764/tokat.gif","https://i.pinimg.com/originals/eb/2e/61/eb2e619238aff8ef23ab87dcb0430947.gif","https://cdn.discordapp.com/attachments/810793063647543331/810819280508682291/get.gif","https://safebooru.org/images/1882/605143df221803e99f3b5423f1df4c8b76bd8ae9.gif?1964756"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Şu kişiyi tokatladın;")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['slap','gifslap','gifslap','slapgif'],

  permLevel: 0

};

exports.help = {

  name: 'anime',

  description: 'Lykia',

  usage: 'anime'

};