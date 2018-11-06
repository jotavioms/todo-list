import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <li>
      <input data-test="task-done" type="checkbox" checked={{task.done}}>
      <p data-test="task-name" style="display:inline">{{task.name}}</p>
    </li>
  `,
});
