Chat = Ember.Application.create();

Chat.Store = DS.Store.extend({
  revision:  11,
  adapter: DS.FixtureAdapter.create()
});

Chat.Room = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

Chat.Room.FIXTURES = 
[
  {
    id: '1',
    title: 'Ruby Room',
    description: 'talk about ruby'
  },
  {
    id: '2',
    title: 'Ember.js Room',
    description: 'everything ember related'
  },
  {
    id: '3',
    title: 'JavaScript Room',
    description: 'we also allow CoffeeScript talk'
  },
  {
    id: '4',
    title: 'Java Room',
    description: 'there is no one here...'
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


Chat.IndexRoute = Ember.Route.extend({});
Chat.RoomsRoute = Ember.Route.extend({});
Chat.RoomRoute = Ember.Route.extend({});
Chat.RoomController = Ember.ObjectController.extend({
	someValue: 124857
});
Chat.RoomsController = Ember.ArrayController.extend({});

$(function() {
	console.log('all is well');
});



