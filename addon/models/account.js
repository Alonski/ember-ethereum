import DS from 'ember-data';

export default DS.Model.extend({
  balance: DS.attr(),
  transactionCount: DS.attr(),
  history: DS.attr(),
});
