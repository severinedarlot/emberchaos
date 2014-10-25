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

  savedSkills: function() {
    return this.get('skills').filter(function (skill) {
      return skill.get('id') !== null;
    });
  }.property('skills.@each.id')
});