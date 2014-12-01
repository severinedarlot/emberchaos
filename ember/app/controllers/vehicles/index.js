import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'vehicles',
  currentUser: Ember.computed.alias("controllers.vehicles.currentUser"),

  actions:{
    createNewVehicle: function(){
      var self = this, vehicle;
      self.set('error', '');
      vehicle = this.get('currentUser.vehicles').createRecord({
        name: this.get('name'), 
        type: this.get('kind'), 
        brand: this.get('brand'), 
        carModel: this.get('carModel')});
      vehicle.save().catch(function (reason) {
        self.set('error', reason.responseJSON.errors[0]);
        console.log('error during saving', reason.responseJSON.errors[0]);
      });
    } 
    
  
    // deleteVehicle:function(){
    //   var self = this, vehicle;
    //   vehicle = this.get('currentUser.vehicles').destroyRecord() // Destroy =delete + persist 
    //   })
    // }
    
  }

});