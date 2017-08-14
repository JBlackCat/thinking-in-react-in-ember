import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filterable-product-table/product-table/product-row', 'Integration | Component | filterable product table/product table/product row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filterable-product-table/product-table/product-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#filterable-product-table/product-table/product-row}}
      template block text
    {{/filterable-product-table/product-table/product-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
