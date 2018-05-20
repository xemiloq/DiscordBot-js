const botconfig = require ("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableeveryone: true});

bot.on("ready", async () => {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("Kethos_ weeb game");
});

bot.on("message", async message => {
	if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageAray = message.content.split(" ");
    let cmd = messageAray[0];
    let args = messageAray.slice(1);

    if(cmd === `${prefix}serverinfo`){
    	 let sicon = message.guild.iconURL;
    	 let serverembed = new Discord.RichEmbed()
    	 .setDescription("Server information")
    	 .setColor("#1568ed")
    	 .setThumbnail(sicon)
    	 .addField("Server Name", message.guild.name)
    	 .addField("Created On", message.guild.createdAt)
    	 .addField("You Joined", message.member.joinedAt)
    	 .addField("Total Members", message.guild.memberCount);


    	return message.channel.send(serverembed);

    }



    if(cmd === `${prefix}hello`){
    	return message.channel.send("Hello!");
    	 }
    if(cmd === `${prefix}salt`){
    	return message.channel.send("Salt is a material that comes from a rare human body, one of these humans have the name Kethos_");
 }
    if(cmd === `${prefix}botinfo`){

    	let bicon = bot.user.displayAvatarURL;
    	
    	let botembed = new Discord.RichEmbed()
    	.setDescription("Bot information")
    	.setColor("#1568ed")
    	.setThumbnail(bicon)
    	.addField("Bot Name", bot.user.username)
    	.addField("Created On", bot.user.createdAt);


         return message.channel.send(botembed);

    }


});

bot.login(botconfig.token);