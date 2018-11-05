import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-detail');
    assert.ok(route);
  });
});
