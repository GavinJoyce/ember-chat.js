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