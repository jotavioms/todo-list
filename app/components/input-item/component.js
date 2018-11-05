import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    <div>
      {{input data-test-add-input}}
      <button data-test-add-button>+</button>
    </div>
  `,
});
