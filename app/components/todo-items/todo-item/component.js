import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <li class="list-item">
      <label class="todo-item-container">
        <input data-test="task-done" type="checkbox" checked={{task.done}}>
        <span data-test="task-name" style="display:inline">{{task.name}}</span>
        {{app-button
          class="remove-task-button"
          click=(action removeTask task.id)
          data-test="remove-button"
        }}
      </label>
    </li>
  `,
});
