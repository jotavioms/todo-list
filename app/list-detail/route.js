import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'todo-item',
        attributes: {
          name: 'Item 1',
          done: false
        },
        relationships: {}
      },{
        id: 2,
        type: 'todo-item',
        attributes: {
          name: 'Item 2',
          done: false
        },
        relationships: {}
      },{
        id: 3,
        type: 'todo-item',
        attributes: {
          name: 'Item 3',
          done: true
        },
        relationships: {}
      }]
    });

    return this.store.findAll('todo-item');
  }
});
