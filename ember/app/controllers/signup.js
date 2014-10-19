import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    save: function() {
    	var self = this, localPassword = this.get('password');

			function login(user) {
				self.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: user.get('email'),
          password: localPassword
        }).then(function () {
				  self.transitionToRoute('account');
				});
				localPassword = '';
			}

			function failure() {
			}

      this.get('model').save().then(login).catch(failure);
    }
  }
});
