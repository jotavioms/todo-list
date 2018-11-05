import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Item 1',
        'done': false
      },
      {
        'name': 'Item 2',
        'done': false
      },
      {
        'name': 'Item 3',
        'done': true
      }
    ]
  }
});
