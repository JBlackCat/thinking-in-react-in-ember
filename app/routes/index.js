import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		//TODO: git mirage database working correctly
		// return this.get('store').findAll('product');

		let products = [{
			type: 'products',
			id: 'football',
			attributes: {
				category: 'Sporting Goods',
				name: 'Football',
				price: '$49.99',
				stocked: true
			}
		}, {
			type: 'products',
			id: 'baseball',
			attributes: {
				category: 'Sporting Goods',
				name: 'Baseball',
				price: '$9.99',
				stocked: true
			}
		}, {
			type: 'products',
			id: 'basketball',
			attributes: {
				category: 'Sporting Goods',
				name: 'Basketball',
				price: '$29.99',
				stocked: false
			}
		}, {
			type: 'products',
			id: 'ipod-touch',
			attributes: {
				category: 'Electronics',
				name: 'iPod Touch',
				price: '$99.99',
				stocked: true
			}
		}, {
			type: 'products',
			id: 'iphone-5',
			attributes: {
				category: 'Electronics',
				name: 'iPhone 5',
				price: '$399.99',
				stocked: true
			}
		}, {
			type: 'products',
			id: 'nexus-7',
			attributes: {
				category: 'Electronics',
				name: 'Nexus 7',
				price: '$199.99',
				stocked: false
			}
		}];

		return products;
	}
});
