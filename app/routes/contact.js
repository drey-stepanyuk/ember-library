import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    /* Method to send a message. The data gets stored in the store and is retrieved through 
     * the admin panel.
     */
    sendMessage(newMessage) {
      newMessage.save()
        .then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes(); // Used to clear the form data.
      this.controller.set('responseMessage', false); // Without this line, the page wouldn't show the form again.
    }

  }

});
