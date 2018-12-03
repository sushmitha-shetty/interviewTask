import Controller from '@ember/controller';

export default Controller.extend({
  city: '',
  placeOrder: false,
  firstName: '',
  lastName: '',
  firstAdress: '',
  secondAdress: '',
  postCode: '',

  actions: {
    checkOut() {
      this.set('placeOrder', true);
      console.log("here!!!", this.get('firstName'));
    }
  }
});