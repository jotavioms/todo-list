import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>
      {{app-input
        placeholder="Novo Item"
        class="add-input"
        data-test="add-input"
        value=inputValue
      }}
      {{app-button
        text="+"
        click=addTask
        data-test="add-button"
      }}
    </div>
  `,
});
