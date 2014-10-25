import Ember from "ember";

export default Ember.View.extend({
  templateName: 'new-skill',
  user: null,
  skill: null,

  createNewSkill: function () {
    if (this.get('skill') === null  || this.get('skill.id') !== null ) {
        console.log('create new skill');

      var newSkill = this.get('controller.store').createRecord('skill', {title: ''});
      this.set('skill', newSkill);
      this.get('user.skills').then(function(promise){
        promise.addObject(newSkill);
      });      
    }
  }.observes('skill.id').on('init') 
});
 