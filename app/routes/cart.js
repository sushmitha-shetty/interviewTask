import Route from '@ember/routing/route';
import Ember from "ember";

export default Route.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  totalPrice: null,

  model() {
  	let cartList = Ember.get(this, 'shoppingCart');
  	return cartList.items;
  },

  setupController: function(controller, model) {
    var total = 0;
  	controller.set('model', model);
    model.forEach(function(item) {
      total = total + parseInt(item.price);
    });
    controller.set('totalPrice', total);
	}
    

});