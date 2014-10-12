import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import DS from 'ember-data';

export default Ember.Route.extend(ApplicationRouteMixin);

export default DS.ActiveModelAdapter.extend({
  namespace: 'api'
});

 
