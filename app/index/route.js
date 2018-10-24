import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        title: 'Lista 1'
      },
      {
        title: 'Lista 2'
      }
    ]

  }
});
