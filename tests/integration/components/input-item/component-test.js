import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an input element', async function(assert) {
    await render(hbs`
      {{input-item}}
    `);

    assert.equal(this.$('[data-test-add-input]').value);
  });

  test('it renders a button element', async function(assert) {
    await render(hbs`
      {{input-item}}
    `);

    assert.equal(this.$('[data-test-add-button]').value);
  });

  test('it adds a new task', async function(assert) {

  });
});
