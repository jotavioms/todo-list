import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  dataTest: '',
  text: '',

  layout: hbs`
    <button data-test="{{dataTest}}">{{text}}</button>
  `,
});
