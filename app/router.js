
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