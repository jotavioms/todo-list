import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  actions: {
    addTask() {
      const newItemName = $('.add-input').val();

      store.createRecord('todo-item', {
        name: newItemName,
        done: false
      });
    }
  },
  layout: hbs`
    <div>
      <input data-test="add-input" class="add-input" placeholder="Novo item"/>
      <button data-test="add-button" {{action 'addTask'}}>+</button>
    </div>
  `,
});
