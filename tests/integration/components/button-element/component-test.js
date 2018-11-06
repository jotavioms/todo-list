import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | button-element', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a button element', async function(assert) {
    await render(hbs`
      {{button-element dataTest="add-button" text="Botão Teste"}}
    `);

    assert.equal(this.$('[data-test="add-button"]').text(), 'Botão Teste');
  });
});
