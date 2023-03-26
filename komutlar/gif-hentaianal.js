const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("🔞 Hey Burası **NSFW** Kanalı Değil")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hentai-anal"],
  permLevel: 0
};

exports.help = {
  name: 'hentai-anal',
  description: 'Hentai-anal İçerik',
  usage: 'hentai-anal'
};