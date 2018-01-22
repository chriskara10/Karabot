const botSettings = require("./botsettings.json");
const Discord = require('discord.js');
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', async () => {
  console.log('Bot is ready! ${bot.user.username}');

  try {
	  let link = await bot.generateInvite(["ADMINISTRATOR"]);
	  console.log(link);
  } catch(e) {
	  	  console.log(e.stack);
  }
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(botSettings.prefix))return;

	if(command == '!user') {
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is user's info")
		.setColor("#9B59B6")
		.addField('Full Username', `${message.author.username}#${message.author.discriminator}`)
		.addField("ID", message.author.id)
		.addField("Created At", message.author.createdAt)

		message.channel.sendEmbed(embed);
	}

// new command testing

  if(command == '!new') {
    let embed = new Discord.RichEmbed()
    .setColor("#3259B6")
    .addField('Guild Name', message.guild.name)
    .addField("Guild Member Count", message.guild.memberCount)
    .addField("Default role", message.guild.defaultRole)

    message.channel.sendEmbed(embed);
  }


});

bot.login(botSettings.token);
