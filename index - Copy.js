const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('invite', 'Invite');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	if(command == '!userinfo') {
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is user's info");
		
		message.channel.sendEmbed(embed);
	}
});

bot.login('NDAwMDU4OTA5NzIyOTM1Mjk3.DTWJKA.FeO35s5ItQIwCZWarF3LgBmcfV4');
