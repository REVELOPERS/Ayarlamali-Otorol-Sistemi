const {MessageEmbed, MessageAttachment} = require("discord.js");
const db = require("quick.db");

module.exports ={
    run: async(client, message, args) =>{

if(!args[0]) return message.reply(`Otorol Sistemini Ayarlamak İçin **${client.config.info.prefix}otorol ayarla #kanal @rol**`)

if (args[0] === "ayarla") {
    const kanal = message.mentions.channels.first()
    const rol = message.mentions.roles.first()
    if(!kanal) return message.reply(`Kanal Etiketlemelisin!`)
    if(!rol) return message.reply(`Rol Etiketlemelisin!`)
    message.channel.send(new MessageEmbed().setTitle(`Başarılı!`).setColor("RANDOM").setDescription(`Otorol Sistemi Başarılı Bir Şekilde Ayarlandı! \nAyarlanan Kanal: ${kanal} \nAyarlanan Rol: ${rol}`))
db.set(`otorolk.${message.guild.id}`, kanal.id)
db.set(`otorol.${message.guild.id}`, rol.id)
}

if (args[0] === "sıfırla") {
    const kanalsorgu = db.fetch(`otorolk.${message.guild.id}`)
    const rolsorgu = db.fetch(`otorol.${message.guild.id}`)
    if(!kanalsorgu) return message.reply(`Sıfırlamam İÇin İlk Önce Ayarlamalısın!`)
    if(!rolsorgu) return message.reply(`Sıfırlamam İÇin İlk Önce Ayarlamalısın!`)
    message.channel.send(new MessageEmbed().setTitle(`Başarılı!`).setColor("RANDOM").setDescription(`Otorol Sistemi Başarılı Bir Şekilde Sıfırlandı!`))
    db.delete(`otorolk.${message.guild.id}`)
    db.delete(`otorol.${message.guild.id}`)
}

    },
    config:{
        name: "aa" // ben şimdilik aa olarak yaptım sız otorol oalrak değiştirirsiniz!
    }
}