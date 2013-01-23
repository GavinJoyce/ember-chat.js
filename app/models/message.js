Chat.Message = DS.Model.extend({
	text: DS.attr('string'),
	room: DS.belongsTo('Chat.Room')
});

Chat.Message.FIXTURES = 
[
	{
		id: 1,
		text: 'This is the first message...',
		room_id: 1
	},
	{
		id: 2,
		text: 'This is the second message...',
		room_id: 1
	},
	{
		id: 3,
		text: 'This is the third message...',
		room_id: 1
	},
	{
		id: 3,
		text: 'This is the third message...',
		room_id: 1
	},
	{
		id: 4,
		text: 'ember, ember, ember',
		room_id: 2
	},
	{
		id: 5,
		text: 'JavaScript...',
		room_id: 3
	},
	{
		id: 6,
		text: 'java, java, java',
		room_id: 4
	}
];