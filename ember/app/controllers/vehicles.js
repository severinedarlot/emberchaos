import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions:{
		createNewVehicle: function(){
			this.get('store').createRecord('vehicle', {name:this.get('name'), type:this.get('type'), brand:this.get('brand'), model:this.get('car_model')});
		} 

		// deleteVehicle:function(){
		// 	this.get('store').deleteRecord('vehicle');
		// }
	}
});