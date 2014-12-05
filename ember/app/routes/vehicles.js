import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    var self = this;
    return this.store.filter('vehicle', function (v) {
      return v.get('user.id') === (self.get('session.content.user_id') + '');
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('currentUser', this.get('store').find('user', this.get('session.content.user_id')));
  },
});

