import Ember from 'ember';
//import Pretender from 'pretender';
import startApp from 'emberchaos/tests/helpers/start-app';

var App, server;

module('Integration - Expert Page', {
  setup: function() {
    App = startApp();
    var experts = [
      {
        id: 1,
        name: 'Bugs Bunny'
      },
      {
        id: 2,
        name: 'Wile E. Coyote'
      },
      {
        id: 3,
        name: 'Yosemite Sam'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/experts', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({experts: experts})];
      });

      this.get('/api/experts/:id', function(request) {
        var expert = experts.find(function(expert) {
          if (expert.id === parseInt(request.params.id, 10)) {
            return expert;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({expert: expert})];
      });
    });

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the experts page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Experts")').then(function() {
      equal(find('h3').text(), 'Experts');
    });
  });
});

test('Should list all experts', function() {
  visit('/experts').then(function() {
    equal(find('a:contains("Bugs Bunny")').length, 1);
    equal(find('a:contains("Wile E. Coyote")').length, 1);
    equal(find('a:contains("Yosemite Sam")').length, 1);
  });
});

test('Should be able to navigate to a expert page', function() {
  visit('/experts').then(function() {
    click('a:contains("Bugs Bunny")').then(function() {
      equal(find('h4').text(), 'Bugs Bunny');
    });
  });
});

test('Should be able visit a expert page', function() {
  visit('/experts/1').then(function() {
    equal(find('h4').text(), 'Bugs Bunny');
  });
});