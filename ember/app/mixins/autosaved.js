import Ember from "ember";

export default Ember.Mixin.create({
  model: null,

  focusOut: function () {
    function failure(reason) {
      console.log('error during saving on focusOut', reason);
    }

    if(this.get('model') != null) {
      var skill = this.get('model');
      this.get('model.user').then(function () {
        skill.save().catch(failure);
      });
    } 
  }
});