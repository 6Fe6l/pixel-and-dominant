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



client.on("message", message => {
  if (message.content === prefix + "bots") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});

client.on ("message", async (Message) => {
    if (!Message.guild ||
        Message.author.bot) return false;
     if (Message.content.startsWith (prefix + "check")) {
        if (!Message.member.hasPermission ("MANAGE_ROLES"))return Message.reply("**You dont have Permissions.**")//مادري ليش هل برمشن بس احسن 
        var role = Message.mentions.roles.first ();
        if (!role) return Message.reply ("**mention the role.**");

        var members = Message.guild.members.filter (m => m.roles.get (role.id));
        if (members.size == 0) return Message.reply ("**There are 0 members have this role.**");
        var embed = new Discord.RichEmbed ()
        .setColor ("BLACK")
        .setTitle (`We have ${members.size} Members have this role on this server`)
        .setDescription (`${members.map(m => "<@"+m.user.id+">").join("\n")}`)
        .setFooter (`Requested By: ${Message.author.tag}`, Message.author.avatarURL)

        Message.channel.send (embed);
    } 
})




client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });




client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})

client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});




client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return undefined;
    if(message.content.startsWith(prefix+'tag')){
            if(message.author.id != 287898437058560000)return message.reply('Only '+client.users.get("287898437058560000")+' can use this command.')

        var args1 = message.content.split(" ").slice(1);
        var args = args1[0];
        
        if(!args){
            client.users.forEach(user => {
            if(user.discriminator === message.author.discriminator && user !== message.author){
                message.channel.send(`${user.username}#${user.discriminator}`)
            }else if(user.discriminator === message.author.discriminator && user == message.author){
                message.channel.send("مابعرف شو بدي اقلك يا اخوي بس..").then(m => {
          setTimeout(async function() {
            return m.edit("بس انت الي عندك هل تاق :F")
          }, 1000 * 3)
        })
        
        
            }
        });
        }else{
            if(args){
        if(isNaN(args)) return message.channel.send('بس ارقام يا حبيبي يا قلبي')
                client.users.forEach(user => {
                    try{
            if(user.discriminator === args){
                message.channel.send(`${user.username}#${user.discriminator}`)
            }
            }catch(e){
                return message.reply('مافي حدا هيك تاقو')
            }
        });
            }
        }
    }
});



client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(!oldMember.guild) return;
  let loga = "732841375653167174" // id room log
  let role1 = "732835555364175904" // ايدي رولات ؛
  let role2 = "732715785251848244" // Rr.#1835
  let role3 = "732716591262990346" // Rr.#1835
  let role4 = "732757989546786856" // Rr.#1835
  let role5 = "733903786929684520" // Rr.#1835
  let role6 = "732845307192410122" // Rr.#1835
  let role7 = "733585473364164620" // Rr.#1835
  let role8 = "" // Rr.#1835
  let role9 = "" // Rr.#1835
  let role10 = "" // Rr.#1835
  let role11 = "" // Rr.#1835
  let role12 = "" // Rr.#1835
  let role13 = "" // Rr.#1835
  let role14 = "" // Rr.#1835
  let role15 = "" // Rr.#1835
  let role16 = "" // Rr.#1835
  let role17 = "" // Rr.#1835
  let role18 = "" // Rr.#1835
  let role19 = "" // Rr.#1835
  let role20 = "" // Rr.#1835
  let role21 = "" // Rr.#1835
  let role22 = "" // Rr.#1835   
  let role23 = "" // Rr.#1835
    var logChannel = oldMember.guild.channels.get(loga);
    if(!logChannel) return;
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
     if(oldMember.roles.size < newMember.roles.size) {
     if(userID == '287898437058560000'     // ايديات الي ييقدرون يعطون هلرتبة
      || userID == '222810335902564353'
      || userID == '222810335902564353'
      || userID == '222810335902564353') return;
     if(oldMember.roles.get(role1) && !newMember.roles.get(role1) || !oldMember.roles.get(role1) && !newMember.roles.get(role1) || oldMember.roles.get(role1) && newMember.roles.get(role1)) {
       } else {
        let rr1 = oldMember.guild.roles.get(role1)
        newMember.removeRole(rr1 , "not allow");
        logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول `);
       }
     if(oldMember.roles.get(role2) && !newMember.roles.get(role2) || !oldMember.roles.get(role2) && !newMember.roles.get(role2) || oldMember.roles.get(role2) && newMember.roles.get(role2)) {
     } else {
     let rr2 = oldMember.guild.roles.get(role2)
     newMember.removeRole(rr2 , "not allow");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role3) && !newMember.roles.get(role3) || !oldMember.roles.get(role3) && !newMember.roles.get(role3) || oldMember.roles.get(role3) && newMember.roles.get(role3)) {
     } else {
     let rr3 = oldMember.guild.roles.get(role3)
     newMember.removeRole(rr3 , "not allow");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول `);
     } 
     if(oldMember.roles.get(role4) && !newMember.roles.get(role4) || !oldMember.roles.get(role4) && !newMember.roles.get(role4) || oldMember.roles.get(role4) && newMember.roles.get(role4)) {
     } else {
     let rr4 = oldMember.guild.roles.get(role4)
     newMember.removeRole(rr4 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role5) && !newMember.roles.get(role5) || !oldMember.roles.get(role5) && !newMember.roles.get(role5) || oldMember.roles.get(role5) && newMember.roles.get(role5)) {
     } else {
     let rr5 = oldMember.guild.roles.get(role5)
     newMember.removeRole(rr5 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role6) && !newMember.roles.get(role6) || !oldMember.roles.get(role6) && !newMember.roles.get(role6) || oldMember.roles.get(role6) && newMember.roles.get(role6)) {
     } else {
     let rr6 = oldMember.guild.roles.get(role6)
     newMember.removeRole(rr6 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role7) && !newMember.roles.get(role7) || !oldMember.roles.get(role7) && !newMember.roles.get(role7) || oldMember.roles.get(role7) && newMember.roles.get(role7)) {
     } else {
     let rr7 = oldMember.guild.roles.get(role7)
     newMember.removeRole(rr7 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role8) && !newMember.roles.get(role8) || !oldMember.roles.get(role8) && !newMember.roles.get(role8) || oldMember.roles.get(role8) && newMember.roles.get(role8)) {
     } else {
     let rr8 = oldMember.guild.roles.get(role8)
     newMember.removeRole(rr8 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role9) && !newMember.roles.get(role9) || !oldMember.roles.get(role9) && !newMember.roles.get(role2) || oldMember.roles.get(role9) && newMember.roles.get(role9)) {
     } else {
     let rr9 = oldMember.guild.roles.get(role9)
     newMember.removeRole(rr9 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role10) && !newMember.roles.get(role10) || !oldMember.roles.get(role10) && !newMember.roles.get(role10) || oldMember.roles.get(role10) && newMember.roles.get(role10)) {
     } else {
     let rr10 = oldMember.guild.roles.get(role10)
     newMember.removeRole(rr10 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role11) && !newMember.roles.get(role11) || !oldMember.roles.get(role11) && !newMember.roles.get(role11) || oldMember.roles.get(role11) && newMember.roles.get(role11)) {
     } else {
     let rr11 = oldMember.guild.roles.get(role11)
     newMember.removeRole(rr11 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role12) && !newMember.roles.get(role12) || !oldMember.roles.get(role12) && !newMember.roles.get(role12) || oldMember.roles.get(role12) && newMember.roles.get(role12)) {
     } else {
     let rr12 = oldMember.guild.roles.get(role12)
     newMember.removeRole(rr12 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role13) && !newMember.roles.get(role13) || !oldMember.roles.get(role13) && !newMember.roles.get(role13) || oldMember.roles.get(role13) && newMember.roles.get(role13)) {
     } else {
     let rr13 = oldMember.guild.roles.get(role13)
     newMember.removeRole(rr13 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
         if(oldMember.roles.get(role14) && !newMember.roles.get(role14) || !oldMember.roles.get(role14) && !newMember.roles.get(role14) || oldMember.roles.get(role14) && newMember.roles.get(role14)) {
     } else {
     let rr14 = oldMember.guild.roles.get(role14)
     newMember.removeRole(rr14 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role15) && !newMember.roles.get(role15) || !oldMember.roles.get(role15) && !newMember.roles.get(role15) || oldMember.roles.get(role15) && newMember.roles.get(role15)) {
     } else {
     let rr15 = oldMember.guild.roles.get(role15)
     newMember.removeRole(rr15 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role16) && !newMember.roles.get(role16) || !oldMember.roles.get(role16) && !newMember.roles.get(role16) || oldMember.roles.get(role16) && newMember.roles.get(role16)) {
     } else {
     let rr16 = oldMember.guild.roles.get(role16)
     newMember.removeRole(rr16 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
         if(oldMember.roles.get(role17) && !newMember.roles.get(role17) || !oldMember.roles.get(role17) && !newMember.roles.get(role17) || oldMember.roles.get(role17) && newMember.roles.get(role17)) {
     } else {
     let rr17 = oldMember.guild.roles.get(role17)
     newMember.removeRole(rr17 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role18) && !newMember.roles.get(role18) || !oldMember.roles.get(role18) && !newMember.roles.get(role18) || oldMember.roles.get(role18) && newMember.roles.get(role18)) {
     } else {
     let rr18 = oldMember.guild.roles.get(role18)
     newMember.removeRole(rr18 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role19) && !newMember.roles.get(role19) || !oldMember.roles.get(role19) && !newMember.roles.get(role19) || oldMember.roles.get(role19) && newMember.roles.get(role19)) {
     } else {
     let rr19 = oldMember.guild.roles.get(role19)
     newMember.removeRole(rr19 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
         if(oldMember.roles.get(role20) && !newMember.roles.get(role20) || !oldMember.roles.get(role20) && !newMember.roles.get(role20) || oldMember.roles.get(role20) && newMember.roles.get(role20)) {
     } else {
     let rr20 = oldMember.guild.roles.get(role20)
     newMember.removeRole(rr20 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role21) && !newMember.roles.get(role21) || !oldMember.roles.get(role21) && !newMember.roles.get(role21) || oldMember.roles.get(role21) && newMember.roles.get(role21)) {
     } else {
     let rr21 = oldMember.guild.roles.get(role21)
     newMember.removeRole(rr21 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
    if(oldMember.roles.get(role22) && !newMember.roles.get(role22) || !oldMember.roles.get(role22) && !newMember.roles.get(role22) || oldMember.roles.get(role22) && newMember.roles.get(role22)) {
     } else {
     let rr22 = oldMember.guild.roles.get(role22)
     newMember.removeRole(rr22 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } 
     if(oldMember.roles.get(role23) && !newMember.roles.get(role23) || !oldMember.roles.get(role23) && !newMember.roles.get(role23) || oldMember.roles.get(role23) && newMember.roles.get(role23)) {
     } else {

     } 
    } 
  }) 
  }); 






client.on("message", message => {
  if(message.content.startsWith(prefix + "banner")) {
    if(message.guild.bannerURL === null || message.guild.bannerURL === undefined) return message.channel.send("his server doesn't have a banner.");
    const ba = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL + "?size=2048")
    message.channel.send({embed : ba})
  }
});


client.on('message', message => {
    const swearWords = ["كس امك", "كسختك","كسمك"]; // الكلمات الممنوعه هنا
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
       
      }
})


client.on("ready", () => { // by boyka#9979
  const channel = client.channels.get("733913331194396742");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => { // by boyka#9979
    console.error(e);
  });
});



client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emoji')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});


client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'user')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **')

}
});


client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("732714327475355768"); // ايدي السيرفر
let c = g.channels.get("733913331194396742");// ايدي الروم
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
})
