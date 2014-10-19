import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
    	var self = this;

			function transitionToPost() {
				self.transitionToRoute('account');
			}

			function failure() {
			}

      this.get('model').save().then(transitionToPost).catch(failure);
    }
  }
});
