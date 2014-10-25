import Ember from "ember";

export default Ember.Mixin.create({
  model: null,

  focusOut: function () {
    function failure(reason) {
      console.log('error during saving on focusOut', reason);
    }

    if(this.get('model') != null) {
      this.get('model').save().catch(failure);  
    } 
  }
});