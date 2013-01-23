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