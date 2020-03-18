exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();

    var api = require("../modules/api.json")
 
        const m = await message.channel.send("Fetching Stats...");
        var stats = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor("Wiki 5M ", client.user.avatarURL)
        .setTitle("Discord Server")
        .setDescription(`Bot Statistics`)
        .addField("Ping", `API: ${Math.round(client.ping)}ms\nMessage: ${Math.round(m.createdTimestamp - message.createdTimestamp)}ms`)
        .addField("Servers", `${client.guilds.size}\n**API Servers**: ${api.servers}`)
        .addField("Users", `${client.users.size}\n**API Users**: ${api.users}`)
        .addBlankField(true)
        .setURL("https://discord.gg/UWefVSw")
        .addField("Main Server", config.cdn)
        .addField("API Server", `${config.cdn}:1234/api`)
        .setImage("https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-08-10-16-32/discord-comeca-a-vender-videojogos-1533915152341.jpg/EG11/thumbnail/750x422/format/jpg/quality/60")
        .setThumbnail(client.user.avatarURL)

        .setFooter(`IP do Servidor: ${servers[message.guild.id].ip}`, client.user.avatarURL)
        /* .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon) */
        message.channel.send({embed: stats});
        m.delete();
        log(`Comando usado [estatísticas] em ${message.guild.name}`)
       
      


};