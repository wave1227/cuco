exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = servers[message.guild.id].ip   
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (err, response, main) {
    req(api, function (err, response, body) {

      if (err) {
        util.zembed("Esse servidor está offline ou não existe ... \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.zembed("Esse servidor está offline ou não existe ... \n**Console:**\n```js\n"+err+"```")
        }
             // deprecated due to instablility
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}
                      //
            
        try {
        var person = args.join(" ")
        if (!person) {return util.embed("Especifique um nome de usuário ex: **"+config.prefix+"find wave1337** (With espaço)")}
        let result = start.find( found => found.name === `${person}`);
      //////////////////////////////
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(state, icon)
        .setDescription(`Usuário encontrado`)
        .addField("Username:", result.name, true)
        .addField("ID do servidor:", result.id, true)
        .setThumbnail(icon)
        .addField("Ping:", result.ping, true)
        .addBlankField(true)
        .setFooter(`IP do servidor: ${servers[message.guild.id].ip}`, icon)
        //.attachFile(`cache/${num}.png`)
        message.channel.send({embed: embed})
        log(`Comando usado [Find] in ${message.guild.name}`)

        } catch (error) {
            util.embed("A pessoa não foi encontrada.")
        }
    }
    })

})
} catch (err) {
    util.embed("Esse servidor não existe. \n**Console:**\n```js\n"+err+"```");
}
} else {
    return util.embed("** Defina ** um Endereço Direto para este servidor. ex: `" + config.prefix + "set 1.1.1.1:1337`\n***__ Certifique-se de incluir o endereço na porta .__ ***")
  } 
    };