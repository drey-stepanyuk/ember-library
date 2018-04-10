import DS from 'ember-data';
import { computed } from '@ember/object';
import { match, and, not, gte } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  contactHeader: 'Contact Us',

  isValid: match('email', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
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
});
