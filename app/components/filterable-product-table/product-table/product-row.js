import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings:['outOfStock'],

	init() {
		this._super(...arguments);

		const model = this.get('productAttr');

		//Set outOfStock classname binding boolean
		this.set('outOfStock', model.stocked);
	}
});
