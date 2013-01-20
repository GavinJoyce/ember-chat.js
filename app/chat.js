


App = Ember.Application.create();

App.Room = Ember.Object.extend({
	id: null,
  name: 'New Room',
	
});
App.Room.reopenClass({
	find: function(id) {
		return {}; //TODO: GJ: find the correct model?
	}
});



App.Router.map(function() {
  this.resource('rooms', function() {
    this.route('new');
  });
	this.resource('room', { path: '/rooms/:room_id' });
});

App.IndexRoute = Ember.Route.extend({
	//model: function() { return [1, 2, 3, 4, 5]; },
	setupController: function(controller) {
		//controller.set('rooms', ['room 1', 'room 2', 'room 3']);
	}
});

App.RoomsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', [
			App.Room.create({ id: 1, name: 'Main Room' }),
			App.Room.create({ id: 2, name: 'Second Room' }),
			App.Room.create({ id: 3, name: 'Third Room' })
		]);
  }
});

App.RoomRoute = Ember.Route.extend({
  
});

App.RoomsController = Ember.ArrayController.extend({
	
});


$(function() {
	console.log('all is well');

});



