import { test } from 'qunit';
import moduleForAcceptance from 'karma-qunit/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add new todo');

test('add a todo item', function(assert) {
  visit('/');
  fillIn('input', 'My new post');
  click('button.ok');
  
  andThen(() => assert.equal(find('ul li:last').text(), "My new post"));

  });

