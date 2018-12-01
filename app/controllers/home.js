import Controller from '@ember/controller';
import Ember from "ember";
// import { inject as service } from '@ember/service';

export default Controller.extend({
  //will load the service in file /app/services/shopping-cart.js
  //shoppingCart: service(),
  shoppingCart: Ember.inject.service('shopping-cart'),
  actions: {
    addToCart(val) {
      let shopCart = Ember.get(this, 'shoppingCart');
      shopCart.add(val);
    }
  }
}); 
