export default function() {
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

	this.namespace = '/api';

	this.get('index', () => {
		return {data: products};
	});

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
