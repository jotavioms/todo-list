import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(assert) {
    await render(hbs`
      {{input-item}}
    `);
  });

  test('it renders an input element', async function(assert) {
    assert.equal(this.$('[data-test="add-input"]').attr('placeholder'), 'Novo item');
  });

  test('it renders a button element', async function(assert) {
    assert.equal(this.$('[data-test="add-button"]').text(), '+');
  });

  test('it adds a new task', async function(assert) {
  });
});
