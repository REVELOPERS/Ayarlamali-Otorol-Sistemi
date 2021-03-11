client.on('guildMemberAdd', (member) => {
  let kanal = db.fetch(`otorolk.${member.guild.id}`);
  let rol = db.fetch(`otorol.${member.guild.id}`);

  if(!kanal) return;
  if(!rol) return;
  member.roles.add(`${rol}`)
  member.guild.channels.cache.get(`${kanal}`).send(`${member} Sunucuya Giriş Yaptı Ve <@&${rol}> Başarılı Bir Şekilde Verildi!`)

});
