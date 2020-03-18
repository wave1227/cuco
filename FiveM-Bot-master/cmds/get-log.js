exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    /////////////////////////////////////////
    ////////////////////////////////////////
    let base = notes[message.guild.id]
    if (!base) { return util.bad(`Certifique-se de salvar um log primeiro, usando\`${config.prefix}save-log <id>\`, onde o \`id\` é o ID de alguém no seu servidor.`) }
    let log = new Discord.RichEmbed()
        .setAuthor(state, icon)
        .setColor(color)
        .setThumbnail(icon)
        .setTitle("FiveM Bot Log")
        .addField(base.username, `**ID do servidor**: ${base.id}\n**Identificadores**:\`\`\`json\n${base.identifiers}\`\`\``)
        .addField("Info", `**Hash exclusivo**: ${base.hash}\n**Hora registrada**: ${new Date(base.time)}`)
        .setFooter(`IP do Servidor: ${servers[message.guild.id].ip}`, icon)
    message.channel.send({ embed: log })
    log(`Commando usado [Obter Log] dentro ${message.guild.name}`)
}