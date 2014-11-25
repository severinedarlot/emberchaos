import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	kind: DS.attr('string'),
	brand: DS.attr('string'),
	car_model: DS.attr('string'),
	// One-to-many dependecies, think to the case of a married couple with a common car 
	user: DS.belongsTo('user', {async: true}),
});
