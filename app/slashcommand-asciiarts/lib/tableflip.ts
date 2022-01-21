import { Meteor } from 'meteor/meteor';

import { slashCommands } from '../../utils/lib/slashCommand';
/*
 * Tableflip is a named function that will replace /Tableflip commands
 * @param {Object} message - The message object
 */

function Tableflip(command:string, params:Record<string, string>, item:Record<string, string>) {
	if (command === 'tableflip') {
		const msg = item;
		msg.msg = `${params} (╯°□°）╯︵ ┻━┻`;
		Meteor.call('sendMessage', msg);
	}
}

slashCommands.add('tableflip', Tableflip, {
	description: 'Slash_Tableflip_Description',
	params: 'your_message_optional',
});