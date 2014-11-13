// new-vehicle.js

import Ember from "ember";

export default Ember.View.extend({
  templateName: 'new-vehicle',
  user: null,
  skill: null,

  createNewVehicle: function () {
    if (this.get('vehicle') === null  || this.get('vehicle.id') !== null ) {
      var newVehicle = this.get('controller.store').createRecord('vehicle', {name: ''});
      this.set('vehicle', newVehicle);
      this.get('user.vehicles').then(function(promise){
        promise.pushObject(newVehicle);
      });      
    }
  }.observes('vehicle.id').on('init') 
});