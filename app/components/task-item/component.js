import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <li>
      {{input type="checkbox" checked=task.done}}
      {{task.name}}
    </li>
  `,
});
