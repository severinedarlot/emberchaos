import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'User Model', {
  needs: ['model:skill', 'model:expert']
});

test('Basic name', function() {
  var user = this.subject({ name: 'toto' });
  equal(user.get('name'), 'toto');
  Ember.run(function(){user.set('name', 'titi');});
  equal(user.get('name'), 'titi');
});

test('Basic nickname', function() {
  var user = this.subject({ name: 'toto' });
  equal(user.get('nickname'), 'toto');
});

test('Nickname is mail if name is undefined', function() {
  var user = this.subject({ email: 'toto@mail.com' });
  equal(user.get('nickname'), 'toto');
});

test('Nickname is mail if name is empty', function() {
	var user = this.subject({ name: ' ', email: 'toto@mail.com' });
  equal(user.get('nickname'), 'toto');
  	
  Ember.run(function(){user.set('email', 'titi@mail.com');});
  equal(user.get('nickname'), 'titi');
});

