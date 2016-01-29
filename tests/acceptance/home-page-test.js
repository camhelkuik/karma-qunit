import { test } from 'qunit';
import moduleForAcceptance from 'karma-qunit/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /home-page', function(assert) {
  visit('/home-page');

  andThen(function() {
    assert.equal(currentURL(), '/home-page');
  });
});
