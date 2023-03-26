const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('Black') 
.addField(`Akatsuki bot`,
 `\n
-**gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
-**man-gif** Rastgele Erkek Gifi Atar!
-**woman-gif** Rastgele Kadın Gifi Atar!
-**couple-gif** Rastgele Sevgili Gifi Atar!
-**baby-gif** Rastgele Bebek Gifi Atar!
-**animal-gif** Rastgele Hayvan Gifi Atar!
-**sil** Sohbetteki mesajları siler
-**gif-slap** Etiketlediğin kişiye tokat atarsın!
-**ters** Her söylediğini ters yazarsın!
-**sor** Bana istediğin bir soru sorarsın!
-**-te** İstediğin birine çıkma teklif edebilirsin!
-**-lowmode** Yazarak sohbet yavaşlığını ayarlayabilirsin!
-**banner** Yazarak yazdığın sayıyı banner'a çevirirsin!
-**neon** Renk yazarak yazdığın şeyleri neon efektine çevirir! (mavi,yeşil,pembe)
**Ekstra**

-**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!

--🔞-- ***NSFW*** --🔞--
-erotik 🔞
-hentai 🔞
-hentaivideos 🔞
-real 🔞
**Linkler**

[Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/JGp7JY7fSj)    
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Lykia',
  usage: 'yardım'
};