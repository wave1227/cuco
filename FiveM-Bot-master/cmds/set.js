exports.run = async (client, message, args) => {
    try {
    var util = require("../fivem");
      /* ----------------------------- */ 
      message.delete();
      var ss = args.join(" ");
      if (message.content.includes("<") || message.content.includes(">")) {return util.embed("** __ Não adicione símbolos como `<>` Apenas faça seu IP .__ ** exemplo: `` \ n $ set 1.1.1.1:1337```")}
      if (!ss || ss === " " || ss == "" || ss === null) {
          return util.embed("Por favor, forneça um endereço com porta para definir neste servidor de Discord. ex: `" + config.prefix + "set 1.1.1.1:1337`\n***__ Certifique-se de incluir o endereço na porta __ ***")
      }
      
      if (!message.content.includes(":")) {return util.embed("Especifique uma porta ex: ** "+ config.prefix +" set 1.1.1.1:1337 **")}
if (!message.member.hasPermission("ADMINISTRATOR")) return util.embed(`<@${message.author.id}>, Você não tem permissão para fazer isso.`);
        servers[message.guild.id] =  {
            guild: message.guild.id,
            ip: ss
        };
    
      fs.writeFile('./auth/servers.json', JSON.stringify(servers), (err) => {
          if(err) {
            
              util.embed("Correu um erro...\n**Console:**\n```js\n"+err+"```");
              return;
          } else {
            log(`Comando usado [Set] para ${ss} | ${message.guild.name}`)
            
              util.good(`Você definiu com êxito o servidor FiveM de ** ${message.guild.name} ** como*${ss}*`)
              return;
          }
      })
    } catch (err) {
        log(err)
    }
      
};