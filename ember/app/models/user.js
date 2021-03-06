import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  name: DS.attr('string'),
  phone: DS.attr('string'),
  localisation: DS.attr('string'),
  presentation: DS.attr('string'),
  skills: DS.hasMany('skill', {async:true}),
  //vehicles
  vehicles: DS.hasMany('vehicle', {async:true}),
  identified: false,

  savedSkills: function() {
    return this.get('skills').filter(function (skill) {
      return skill.get('id') !== null;
    });
  }.property('skills.@each.id'),

  nickname: function () {
    if (this.get('name') === undefined || this.get('name').trim().length === 0) {
      if (this.get('email') === undefined) {
        return '';
      }
      return this.get('email').split('@')[0];
    }
    return this.get('name');
  }.property('name', 'email'),

  savedVehicles: function() {
    return this.get('vehicles').filter(function (vehicle) {
      return vehicle.get('id') !== null;
    });
  }.property('vehicles.@each.id')

});