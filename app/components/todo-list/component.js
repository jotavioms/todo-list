import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  inputValue: '',

  actions: {
    addTask() {
      const value = this.get('inputValue');

      // validacao/trim/store/clear
      this.set('inputValue', '');
    }
  },

  layout: hbs`
    <h1 data-test="header">{{header}}</h1>
    {{input-item
      inputValue=inputValue
      addTask=(action 'addTask')
    }}
    {{todo-items tasks=tasks}}
  `,
});
