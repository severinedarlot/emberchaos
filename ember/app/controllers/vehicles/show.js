import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'vehicles',
  currentUser: Ember.computed.alias("controllers.vehicles.currentUser"),

  actions:{
    deleteVehicle: function (){
      var self = this;
      self.set('error', '');
      this.get(model).destroyRecord();
    }
  },
});