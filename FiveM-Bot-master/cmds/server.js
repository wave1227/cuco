exports.run = async (client, message, args) => {
  var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = `${servers[message.guild.id].ip}`    
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (errr, response, main) {
    req(api, function (err, response, body) {
      if (err) {
        util.embed("Esse servidor está offline ou não existe ... \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.embed("Esse servidor está offline ou não existe ... \n**Console:**\n```js\n"+err+"```")
        }
     
     
        // reprovado devido à instabilidade na usa utilização
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}


        if (start === null || start === []) {
            var e = 0
        } else {
            var e = start.length
        }
        if (!start2.vars.tags) {var tags = 'None'} else {var tags = start2.vars.tags}
        var resourcee = JSON.stringify(start2.resources)
        if (resourcee.length > 850) {
            var resourc = `Existem muitos...\n(Passed Discord Char Limit)`
        } else {
            var resourc = resourcee;
        }
        if (err || errr) { 
            util.embed("Um erro ocorreu... \n**Console:**\n```js\n"+err+"```")
            return;
         } else {
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(state, icon)
        .setDescription(`informação do servidor\n\n${news}`)
     
        .addField("Total de Jogadores", `${e}/${start2.vars.sv_maxClients}`, true)
        .addField("Script Hook", `${start2.vars.sv_scriptHookAllowed}`, true)
        .setThumbnail(icon)
        .addField("Versão do servidor", `${start2.version}`, true)
        .addField("Tags", `${tags}`)

        .addField("Servidor", `${start2.server}`)
     
        //.setFooter(`Follow me instagram.com/rafaael.skt :)`, icon)
        .setFooter(`IP do Serivodor: ${servers[message.guild.id].ip}`, icon)
        message.channel.send({embed: embed});
        log(`Comando Usado [Server] in ${message.guild.name}`)
      
        }
    }
// Como o limite do addField é 25, existe uma maneira de usar a função `forEach` para uma matriz e fazê-la entrar em um 
}) 
})
  } catch (err) {
      util.embed("Esse servidor está offline ou não existe. \n**Console:**\n```js\n"+err+"```");
  }
} else {
  return util.embed("** Defina ** um Endereço Direto para este servidor. ex: `" + config.prefix + "set 1.1.1.1:1337`\n***__ Certifique-se de incluir o endereço na porta .__ ***")

}
};