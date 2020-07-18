const Discord = require("discord.js");
const myid = ['287898437058560000']
const prefix = ['.'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();



client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7); 
client8.login(process.env.TOKEN8); 
client9.login(process.env.TOKEN9); 
client10.login(process.env.TOKEN10); 
client11.login(process.env.TOKEN11); 
client12.login(process.env.TOKEN12); 
client13.login(process.env.TOKEN13); 
client14.login(process.env.TOKEN14); 
client15.login(process.env.TOKEN15); 
client16.login(process.env.TOKEN16); 
client17.login(process.env.TOKEN17); 
client18.login(process.env.TOKEN18); 
client19.login(process.env.TOKEN19); 
client20.login(process.env.TOKEN20); 
client21.login(process.env.TOKEN21); 
client22.login(process.env.TOKEN22); 
client23.login(process.env.TOKEN23); 
client24.login(process.env.TOKEN24); 



client.on('message', message => {
  if (message.content === 'Vhelp') {
message.channel.send('قريبا.')
  }
  if(message.content === 'Vtag'){
message.channel.send('قريبا..')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


client.on("message",async message => {
  if (message.content === "/server") {
  let embed = new Discord.RichEmbed()
  .addField(`:id: Server ID:`, `${message.guild.id}`, true)
  .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("EN-nw").fromNow()}`,true)
  .addField(`:crown: Owned by`, `${message.guild.owner.user.toString()}`,true) 
  .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
  .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
  .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} \n **Verification level:** ${message.guild.verificationLevel}`, true)  
  .addField(`:closed_lock_with_key: Roles [${message.guild.roles.size}]`, `To see the whole list with all roles use **${prefix}roles**`, true) 
  .setColor(`black`)
  .setAuthor(`${message.guild.name}`, `${message.guild.iconURL || client.user.avatarURL}`);
  message.channel.send(embed);
  

  }

  if(message.content.startsWith('/roles')) {
      let spaces = "                      "
      const roles = []
      message.guild.roles.forEach(c => { roles.push(c.name+spaces.substring(c.name.length)+c.members.size+" members"); });
      message.channel.send("\`\`\`"+roles.join("\n")+"\`\`\`");
  }
 
 

    if(message.content.split(' ')[0] == `$ban`){
      if(!message.member.hasPermission('BAN_MEMBERS')) return
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      if(!user) return message.channel.send(`**🙄 - I can't find this member**`);
      if(user.user.id === message.author.id) return message.channel.send('**🙄 - You can\'t ban yourself!**');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`🙄 **-  I can't ban @${user.user.username}**`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`**🙄 - I couldn't ban that user. Please check my permissions and role position.**`);
      message.guild.member(user).ban(user);
      message.channel.send(`**✅ ${user.user.username} banned from the server! ✈**`)
    }

    if(message.content.split(' ')[0] == `/kick`){
      if(!message.member.hasPermission('KICK_MEMBERS')) return;
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      if(!user) return message.channel.send(`**🙄 - I can't find this member**`);
      if(user.user.id === message.author.id) return message.channel.send('**🙄 - You can\'t kick yourself!**');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`🙄 **-  i can't ban @${user.user.username}**`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`🙄 **-  You can't kick @${user.user.username}**`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`**🙄 - I couldn't kick that user. Please check my permissions and role position.**`);
      message.guild.member(user).kick(user);
      message.channel.send(`**✅ ${user.user.username} kicked from the server! ✈**`)
    }
    if(message.content === prefix + "ping") {

  let ping = await message.channel.send("pong")

  ping.edit(`Time taken: ${Date.now() - message.createdTimestamp} ms \nDiscord API: ${Math.round(client.ping)} ms`, {code:"javascript"})

  }
});



client.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "profile") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}` 
          }
          
        ]
      }) 
      )
    }
});
