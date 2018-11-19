import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>
      <ul data-test="task-list" class="list">
        {{#each tasks as |task|}}
          {{todo-items/todo-item
            task=task
            removeTask=removeTask
          }}
        {{/each}}
      </ul>
    </div>
  `,
});
