import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'vehicles',
  currentUser: Ember.computed.alias("controllers.vehicles.currentUser"),

});