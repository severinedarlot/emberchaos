import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'vehicles',
  currentUser: Ember.computed.alias("controllers.vehicles.currentUser"),

  nextVehicle: function() {
      var self = this;
      self.set('error', '');
      this.get('model').then(function() {
        var nextVehicle = self.get('currentUser.vehicles.firstObject');
        if (nextVehicle === undefined) {
          self.transitionToRoute('vehicles.index');
        } else {
          self.transitionToRoute('vehicles.show', nextVehicle);
        } 
      });
    }, 
});