import { test } from 'qunit';
import moduleForAcceptance from 'karma-qunit/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add new todo');

test('visiting /add-new-todo', function(assert) {
  visit('/add-new-todo');

  andThen(function() {
    assert.equal(currentURL(), '/add-new-todo');
  });
});
