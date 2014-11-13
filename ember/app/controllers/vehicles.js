import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions:{
		createNewVehicle: function(){
			this.get('store').createRecord('vehicle', {name:'Titine', type:'Voiture',brand:'Renault',model:'508'});
		} 
	}
});