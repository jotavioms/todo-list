import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-element', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an input element', async function(assert) {
    await render(hbs`
      {{input-element dataTest="add-input" placeholder="Inserir Teste"}}
    `);

    assert.equal(this.$('[data-test="add-input"]').attr('placeholder'), 'Inserir Teste');
  });
});
