import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  dataTest: '',
  placeholder: '',

  layout: hbs`
    <input data-test="{{dataTest}}" placeholder="{{placeholder}}"/>
  `,
});
