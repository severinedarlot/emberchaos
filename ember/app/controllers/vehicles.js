import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions:{
		createNewVehicle: function(){      
			var vehicle = this.store.createRecord('vehicle', {name:this.get('name'), type:this.get('type'), brand:this.get('brand'), model:this.get('car_model')});

			vehicle.save(); // needed to get a PERSISTENT record
			} 
	}
			
});