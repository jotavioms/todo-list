import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | todo-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders header text', async function(assert) {
    const text = 'Texto Qualquer';
    this.set('text', text);

    await render(hbs`
      {{todo-list header=text}}
    `);

    assert.equal(this.$('[data-test-header]').text(), text);
  });


});
