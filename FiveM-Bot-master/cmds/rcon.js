exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR")) return util.bad(`<@${message.author.id}>, Você não tem permissão para fazer isso.`);
    if (args[0] == "set") {
        if (args[1] == null || args[1] == " " || !args[1]) { return util.embed(`Por favor, digite um \`rcon_password \` ex: \`${config.prefix} rcon set password123\` ou faça \`${config.prefix} rcon help\``)}
                rcondb [message.guild.id] = {
            guild: message.guild.id,
            hash: crypto.AES.encrypt(args[1], config.token).toString() /* HASES WITH BOT TOKEN */
        }

        fs.writeFile("./auth/rcon.json", JSON.stringify(rcondb), (err) => {
            if (err) { return util.embed("An Error Occured...\n**Console:**\n```js\n" + err + "```") }
            log(`RCON [Set] | ${message.guild.name}`)
            util.good(`You successfully configured **${message.guild.name}**'s RCON server`)
            return;
        })
    } else if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setAuthor(state, icon)
        .setDescription ("Ajuda do FiveM Bot RCON")
                .addField ("RCON no FiveM", "RCON é basicamente o posto mais alto de administração em um servidor. Após o login no RCON enquanto estiver jogando em um servidor, você pode alterar basicamente qualquer configuração do servidor")
                .addField ("Configurando o RCON para FXServer", "No seu` server.cfg`, descomente / adicione `rcon_password your_password` em qualquer lugar do arquivo.")
                .addField ("Vinculando FXServer ao FiveM Bot", `Do \` $ {config.prefix} rcon defina your_rconpassword \`em um canal onde ninguém pode ver a mensagem`)
                .addFiedl ("Executando comandos RCON com o FiveM Bot", `Em qualquer canal,faça \`${config.prefix} rcon any_command \`(também com argumentos) \ nEncontre [comandos RCON] (https://docs.fivem.net / server-manual / server-command /) aqui.`)
                .addField ("RCON Password Security", "** Todas ** as senhas RCON são criptografadas em [AES Encryption] (https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) e estão protegidas.")
                .setColor (cor)
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    } else {
        try {
            // console.log (crypto.AES.decrypt (rcondb [message.guild.id] .hash, config.token) .toString (crypto.enc.Utf8))
            let temp = servers[message.guild.id].ip.split(":")
            var rcon = new Q3RCon({
                address: temp[0],
                port: temp[1],
                password: crypto.AES.decrypt(rcondb[message.guild.id].hash, config.token).toString(crypto.enc.Utf8),
            });
            rcon.send(args.join(" "), function (response) {
                let embed = new Discord.RichEmbed()
                    .setAuthor(state, icon)
                    .setTitle(`Saída RCON em${servers[message.guild.id].ip} - `)
                    .setDescription(`\`\`\`css\n${response.slice(6)}\`\`\``)
                    .setFooter(`Consulta RCON: ${args.join(" ")}`)
                    .setColor(color)
                    .setThumbnail(icon)
                message.channel.send({ embed: embed })
                return;
            });
        } catch (e) {
            return util.bad(`Certifique-se de definir sua senha rcon. ex:\`${config.prefix}rcon set password1337\` ou fazer \`${config.prefix}rcon help\``)
        }
    }

};