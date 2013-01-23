Chat.CreateMessageView = Ember.TextField.extend({
	elementId: 'new-message',
	placeholder: "Type your message here...",

  insertNewline: function() {
    this._super();
    this.set('value', ''); //NOTE: GJ: the value is updated, but the view does not reflect the change
  }
});