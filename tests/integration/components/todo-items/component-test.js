import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | todo-items', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a list of tasks', async function(assert) {
    this.set('tasks', [
      {
        'name': 'Test Item 1',
        'done': false
      },
      {
        'name': 'Test Item 2',
        'done': false
      }
    ])

    await render(hbs`
        {{task-list-item
          tasks=tasks}}
      `);

    assert.equal(this.$('[data-test="task-list"] li').length, 2);
  });
});
