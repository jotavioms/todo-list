import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>
      {{input-element
        dataTest="add-input"
        placeholder="Novo item"}}

      {{button-element
        dataTest="add-button"
        text="+"
      }}
    </div>
  `,
});
