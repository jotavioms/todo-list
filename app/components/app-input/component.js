import Component from '@ember/component';

export default Component.extend({
  tagName: 'input',

  classNames: [
    'classe-default'
  ],

  attributeBindings: [
    'placeholder',
    'data-test',
    'value'
  ],

  input(event) {
    this.set('value', event.target.value)
  },

  keyPress(event) {
    if (event.keyCode === 13) {
      this.sendAction();
    }
  }
});
