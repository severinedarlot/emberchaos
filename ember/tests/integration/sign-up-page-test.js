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


test('Landing page allows to access to sign up', function() {
  visit('/').then(function() {
    equal(find('a:contains("Sign up")').length, 1);
    click('a:contains("Sign up")').then(function () {
      equal(find('h3:contains("Join EmberChaos")').length, 1);
    });
  });
});

test('Should be access directly', function() {
  visit('/signup').then(function() {
    equal(find('h3:contains("Join EmberChaos")').length, 1);
  });
});
