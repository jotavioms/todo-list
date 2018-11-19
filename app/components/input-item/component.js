import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div class="input-item">
      {{app-input
        placeholder="Novo Item"
        class="add-input input"
        data-test="add-input"
        value=inputValue
        action=addTask
      }}
      {{app-button
        class="add-button input"
        click=addTask
        data-test="add-button"
      }}
    </div>
  `,
});
