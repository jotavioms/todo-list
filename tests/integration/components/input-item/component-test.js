import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it adds a new task', async function(assert) {
    await render(hbs`
      {{input-item}}
    `);
  });
});
