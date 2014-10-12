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
        name: 'Harry Potter',
        skill_ids: [1,2]
      },
      {
        id: 2,
        name: 'Hermione Granger',
        skill_ids: [3]
      },
      {
        id: 3,
        name: 'Ron Weasley',
        skill_ids: [4, 5, 6]
      }
    ];

    var skills = [
      { id: 1, title: "Voler un oeuf à une maman dragon", expert_id: 1 },
      { id: 2, title: "Repousser des détraqueurs", expert_id: 1 },
      { id: 3, title: "Connait la bibliothèque de poudlard sur le bout des doigts.", expert_id: 2 },
      { id: 4, title: "Très bon joueur d'échecs magiques", expert_id: 3 },
      { id: 5, title: "Bon camarade mais parfois boudeur.", expert_id: 3 },
      { id: 6, title: "Possède toute une collection de pulls fait maison", expert_id: 3 }
    ];

    server = new Pretender(function() {
      this.get('/api/experts', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({experts: experts, skills: skills})];
      });

      this.get('/api/experts/:id', function(request) {
        var expert = experts.find(function(expert) {
          if (expert.id === parseInt(request.params.id, 10)) {
            return expert;
          }
        });
        var expertSkills = skills.filter(function(skill) {
          if (skill.expert_id === expert.id) {
            return true;
          }
        });
        return [200, {"Content-Type": "application/json"}, JSON.stringify({expert: expert, skills: expertSkills})];
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

test('Should list all experts and number of skills', function() {
  visit('/experts').then(function() {
    equal(find('a:contains("Harry Potter (2)")').length, 1);
    equal(find('a:contains("Hermione Granger (1)")').length, 1);
    equal(find('a:contains("Ron Weasley (3)")').length, 1);
  });
});

test('Should be able to navigate to a expert page', function() {
  visit('/experts').then(function() {
    click('a:contains("Harry Potter")').then(function() {
      equal(find('h4').text(), 'Harry Potter');
    });
  });
});

test('Should be able visit a expert page', function() {
  visit('/experts/1').then(function() {
    equal(find('h4').text(), 'Harry Potter');
  });
});

test('Should list all skills for a expert', function() {
  visit('/experts/1').then(function() {
    equal(find('li:contains("Voler un oeuf à une maman dragon")').length, 1);
    equal(find('li:contains("Repousser des détraqueurs")').length, 1);
  });
});
