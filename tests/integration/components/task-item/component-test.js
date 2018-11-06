import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | task-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(assert) {
    this.set('taskItem', {
        'name': 'Test Item 1',
        'done': false
      }
    );

    await render(hbs`
      {{task-item task=taskItem}}
    `);
  });

  test('it renders a task name', async function(assert) {
    assert.equal(this.$('[data-test="task-name"]').text(), 'Test Item 1');
  });

  test('it renders a task checkbox button', async function(assert) {
    this.set('taskItem', {
        'name': 'Test Item 1',
        'done': true
      }
    );

    assert.equal(this.$('[data-test="task-done"]:checked').length, 1);
  });

  test('it can be checked', async function(assert) {
    assert.equal(this.$('[data-test="task-done"]:checked').length, 0);

    await click('[data-test="task-done"]');

    assert.equal(this.$('[data-test="task-done"]:checked').length, 1);
  });

  test('it can be unchecked', async function(assert) {
    assert.equal(this.$('[data-test="task-done"]:checked').length, 0);

    await click('[data-test="task-done"]');

    assert.equal(this.$('[data-test="task-done"]:checked').length, 1);

    await click('[data-test="task-done"]');

    assert.equal(this.$('[data-test="task-done"]:checked').length, 0);
  });
});
