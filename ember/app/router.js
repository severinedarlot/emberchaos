import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('experts', function () {
    this.route('show', {path: ':expert_id'});
  });
  this.route('protected');
  this.route('account');
  this.route('login');
  this.route('signup');
  this.route('skills');
  // routing for the vehicles
  this.resource('vehicles', function() {
    this.route('show', {path: ':vehicle_id'});
    this.route('new');
  });
});

export default Router;
