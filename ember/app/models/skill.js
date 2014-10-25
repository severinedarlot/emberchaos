import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  expert: DS.belongsTo('expert'),
  user: DS.belongsTo('user')
});
