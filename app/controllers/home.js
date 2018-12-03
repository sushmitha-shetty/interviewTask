import Controller from '@ember/controller';
import Ember from "ember";
import $ from 'jquery';
// import { inject as service } from '@ember/service';

export default Controller.extend({
  //will load the service in file /app/services/shopping-cart.js
  //shoppingCart: service(),
  shoppingCart: Ember.inject.service('shopping-cart'),
  actions: {
    addToCart(val) {
      let shopCart = Ember.get(this, 'shoppingCart');      
    	let item = shopCart.get('items').find(function(ele) {
      	return ele.id == val.id;
      });

      if (!item) {
        shopCart.add(val);
        $('#flashIn').delay(100).fadeIn('normal', function() {
          $(this).delay(1000).fadeOut();
        });
      } else {
        $('#flashOut').delay(100).fadeIn('normal', function() {
          $(this).delay(1000).fadeOut();
        });
      }     
    }
  }
}); 
