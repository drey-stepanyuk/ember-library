import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { match, and, not, gte } from '@ember/object/computed';

export default Controller.extend({

  contactHeader: 'Contact Us',
  emailAddress: '',
  contactMessage: '',
  responseMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('contactMessage.length', 5),
  isEnabled: and('isValid', 'isLongEnough'),
  isDisabled: not('isEnabled'),
  emailSuccess: computed('isValid', function() {
    if(this.get('isValid') === true) {
      return 'has-success';
    }
  }),
  messageSuccess: computed('isLongEnough', function() {
    if(this.get('isLongEnough') === true) {
      return 'has-success';
    }
  }),

  actions: {
    sendMessage() {
      alert(`Sending: '${this.get('contactMessage')}', from: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! Your message has been sent!`);
      this.set('emailAddress', '');
      this.set('contactMessage', '');
    }
  }
});
