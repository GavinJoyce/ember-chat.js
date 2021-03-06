Chat = Ember.Application.create();

Chat.Store = DS.Store.extend({
  revision:  11,
  adapter: DS.FixtureAdapter.create()
});

Chat.Message = DS.Model.extend({
	text: DS.attr('string'),
	room: DS.belongsTo('Chat.Room')
});

Chat.Room = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
	messages: DS.hasMany('Chat.Message')
});


Chat.Room.FIXTURES = 
[
  {
    id: 1,
    title: 'Ruby Room',
    description: 'talk about ruby',
		messages: [1,2,3]
  },
  {
    id: 2,
    title: 'Ember.js Room',
    description: 'everything ember related',
		messages: [4]
  },
  {
    id: 3,
    title: 'JavaScript Room',
    description: 'we also allow CoffeeScript talk',
		messages: [5]
  },
  {
    id: 4,
    title: 'Java Room',
    description: 'there is no one here...',
		messages: [6]
  }
];

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

Chat.Router.map(function() {
  this.resource("rooms", {path: '/rooms'}, function(){
    this.route('new');
    this.route('show', {path: '/:room_id'}) ;
    this.route('edit', {path: '/:room_id/edit'});
  });
});


Chat.RoomsIndexRoute  = Ember.Route.extend({
  model: function(){
		return  Chat.Room.find();
  }
});

Chat.RoomsShowController = Ember.ObjectController.extend({
	createMessage: function(value) {
	  if (!value.trim()) { return; }
	  var message = Chat.Message.createRecord({
			text: value, room_id: this.get('id')
		})
		this.get('messages').pushObject(message);
		//this.get('store').commit();
	}
});

Chat.CreateMessageView = Ember.TextField.extend({
	elementId: 'new-message',
	placeholder: "Type your message here...",

  insertNewline: function() {
    this._super();
    this.set('value', ''); //NOTE: GJ: the value is updated, but the view does not reflect the change
  }
});



