const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("ta");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "gueule"){
        msg.channel.send("oui enfin ta gueuuuule!/")
    }

});

bot.login(token); //a garder en version heroku
