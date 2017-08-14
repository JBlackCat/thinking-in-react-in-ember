import DS from 'ember-data';

export default DS.Model.extend({
	category: DS.attr(),
	name: DS.attr(),
	price: DS.attr(),
	stocked: DS.attr()
});
