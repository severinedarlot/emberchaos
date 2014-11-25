import Ember from "ember";

export default Ember.View.extend({
  templateName: 'new-skill',
  user: null,
  skill: null,

  createNewSkill: function () {
    if (this.get('skill') === null  || this.get('skill.id') !== null ) {
      var newSkill = this.get('user.skills').createRecord({title: ""});
      this.set('skill', newSkill);      
    }
  }.observes('skill.id').on('init') 
});
 