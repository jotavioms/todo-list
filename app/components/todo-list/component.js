import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  inputValue: '',

  actions: {
    addTask() {
      const value = this.get('inputValue').trim();
      const lastItemId = Number(this.store.peekAll('todo-item').get('lastObject').get('id'));

      if (value) {
        this.store.createRecord('todo-item', {
          id: lastItemId + 1,
          name: value,
          done: false,
        });

        this.set('inputValue', '');
      }
    },

    removeTask(id) {
      this.store.findRecord('todo-item', id, { backgroundReload: false }).then(function(item) {
        item.unloadRecord();
      });
    },
  },

  layout: hbs`
    <div class="container">
      <h1 data-test="header">{{header}}</h1>
      {{input-item
        inputValue=inputValue
        addTask=(action 'addTask')
      }}
      {{todo-items
        tasks=tasks
        removeTask=(action 'removeTask')
      }}
    </div>
  `,
});
