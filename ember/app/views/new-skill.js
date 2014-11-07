import Ember from "ember";

export default Ember.View.extend({
  templateName: 'new-skill',
  user: null,
  skill: null,

  createNewSkill: function () {
    if (this.get('skill') === null  || this.get('skill.id') !== null ) {
      var newSkill = this.get('controller.store').createRecord('skill', {title: ''});
      this.set('skill', newSkill);
      this.get('user.skills').then(function(promise){
        promise.pushObject(newSkill);
      });      
    }
  }.observes('skill.id').on('init') 
});
 