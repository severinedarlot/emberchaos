import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('experts', function() {
    this.route('show', {path: ':expert_id'});
  });
});

export default Router;
