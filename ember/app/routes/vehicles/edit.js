import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.Extend({
  model: function (params) {
    return this.store.find('vehicle', params.vehicle_id);
  }
});

