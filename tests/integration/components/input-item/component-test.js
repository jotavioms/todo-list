import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an input element', async function(assert) {
    await render(hbs`
      {{#input-item}}
        template block text
      {{/input-item}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders a button element', async function(assert) {

  });
});
