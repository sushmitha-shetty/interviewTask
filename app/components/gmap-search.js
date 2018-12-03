import Component from '@ember/component';

export default Component.extend({
	city: '',
	searchTextField: function() {
    var options = {
      types: ['(cities)']
    };
    var input = this.$('.search-field')[0];
    new window.google.maps.places.Autocomplete(input, options);
    console.log(new window.google.maps.places.Autocomplete(input, options));
  }.on('didInsertElement')
});
