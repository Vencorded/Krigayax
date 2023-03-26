const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://pa1.narvii.com/5579/95bbe45feb2f46a0714091cf155365cd75099915_hq.gif","https://tenor.com/view/hentai-boobs-tits-anime-gudgudsupply-gif-19085092","https://tenor.com/view/hentai-panties-butt-anime-anime-girl-gif-16161778","https://tenor.com/view/hentai-panties-butt-anime-anime-girl-gif-16161778","https://media1.giphy.com/media/l0Iymo6MEqAJfHaso/giphy.gif?cid=e1bb72ffqs6lttv1mt5vjvonp42o7mqh4qtrbekzjx4loqt9&rid=giphy.gif","https://media3.giphy.com/media/i1ZoaTn24AYgg/giphy.gif?cid=e1bb72ffqs6lttv1mt5vjvonp42o7mqh4qtrbekzjx4loqt9&rid=giphy.gif","https://lh3.googleusercontent.com/proxy/54T88wlOYshLRbntx8IoMc03qqfSpu8xbxgJfKulZ3GM-6C-4NKyAyPELLhWv_SBJMzP2_0JoIvUuaJD_Yllvs5PlkJ-A8MMQkz-qLj_CjFFAh2vyTLFZiXmUH13blpJYWMYwmA","https://img-s2.onedio.com/id-546a22b8a13db5e048a020c1/rev-0/w-900/h-505/f-gif/s-896d50af245f05e98e5dde932c1b9fa03c6898c0.gif","https://sefinsizetavsiyesi.files.wordpress.com/2017/12/giphy.gif?w=353&h=198","https://img.gifmagazine.net/gifmagazine/images/700915/original.gif","https://i.kym-cdn.com/photos/images/original/000/663/034/79d.gif","https://lh3.googleusercontent.com/proxy/J98wg2Xk0p0mJ55eRHDFaaicZYlYniYLRiOXTZuquW-lA3ahduz1WeDr-TKKDQ1MFdJ5VEcGzho49FqLoCZlZcIPLfnrf6MempmAMV6FUDp78hsJjnYATw","https://static.hentai-gif-anime.com/upload/20160425/1/1200/detail.gif","https://media3.giphy.com/media/1ylfuYzjErdKkJsGPi/giphy.gif","https://steamuserimages-a.akamaihd.net/ugc/942835959912748923/7B1AD0C6DF0DA86C90E4440CD9E012BBD06DE5FD/"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Erotik Gif ;")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-erotik','erotik-gif','erotik','erotikgif'],

  permLevel: 0

};

exports.help = {

  name: 'erotik',

  description: 'erotik',

  usage: 'erotik'

};