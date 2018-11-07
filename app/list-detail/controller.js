import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask() {
      const newItemName = $('.add-input').val();

      this.store.createRecord('todo-item', {
        name: newItemName,
        done: false
      });
    }
  },
});
