import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings:['outOfStock'],
	outOfStock: Ember.computed('productAttr', function() {
		return this.get('productAttr').stocked;
	}),
});
