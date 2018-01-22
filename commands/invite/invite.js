const commando = require('discord.js-commando');

class InviteCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'invite',
			group: 'invite',
			memberName: 'invite',
			description: 'see invite amounts'
		});
	}
	
	async run(message, args) {
		message.reply("invite working");
	}
}

module.exports = InviteCommand;