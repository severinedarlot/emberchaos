import Ember from 'ember';
import startApp from 'emberchaos/tests/helpers/start-app';

var App;
module('Integration - Sign up', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test('Landing page has link to sign up', function() {
  visit('/').then(function() {
    equal(find('a:contains("Sign up")').length, 1);
  });
});
