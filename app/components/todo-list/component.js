import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  header: '',

  layout: hbs`
    <h1 data-test-header>{{header}}</h1>
    {{input-item}}
    {{task-list-item tasks=tasks}}
  `,
});
