import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  shoppingCart: service(),

  actions: {
    removeItem(item) {
      let shopCart = Ember.get(this, 'shoppingCart');
      shopCart.remove(item);
    }
  }
});
