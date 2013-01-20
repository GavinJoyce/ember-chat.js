$(function() {
	console.log('all is well');
});




App = Ember.Application.create();

App.Router.map(function() {
  this.resource('rooms', function() {
    this.route('new');
  });
	this.resource('room', { path: '/rooms/:room_id' });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['a', 'b', 'c']);
  }
});

App.RoomsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['room 1', 'room 2', 'room 3']);
  }
});

App.RoomRoute = Ember.Route.extend({
  model: function(params) {
    return { name: 'room ' + params.room_id, id: params.room_id };
  }
});

App.RoomsController = Ember.ArrayController.extend({
  
});

