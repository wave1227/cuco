exports.run = async (client, message, args) => {
  var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
        try {
        var arg = `${servers[message.guild.id].ip}`    
        let api2 = `http://${arg}/info.json`
        req(api2, function (error, response, main) {
         
          if (error) {
            return util.bad("Este servidor está offline");
          } else {
            util.good(`Online.\n Ip do Servidor: ${servers[message.guild.id].ip}`)
          }
          log(`Comando usado [Status] em ${message.guild.name}`)
    });

      } catch (err) {
        return util.embed("Este server não existe. \n**Console:**\n```js\n"+err+"```");
      }
    } else {
        return util.embed("Se faz-Favor ** Defina ** um Endereço Direto para este servidor. ex: `" + config.prefix + "set 1.1.1.1:1337`\n***__ Certifique-se de incluir o endereço na porta .__ ***")
      } 
};