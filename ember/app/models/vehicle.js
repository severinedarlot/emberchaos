import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string'),
	model: DS.attr('string'),
	// One-to-one dependecies
	// user: DS.belongsTo('user', {async: true}),
});
