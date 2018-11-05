import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>
      <ul>
        {{#each tasks as |task|}}
          {{task-item task=task}}
        {{/each}}
      </ul>
    </div>
  `,
});
