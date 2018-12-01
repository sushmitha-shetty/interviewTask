import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: '001',
      description: 'Bhandari Creations',
      category: 'Black Suit',
      price: '2039',
      image: 'themes/images/ladies/1.jpg'
    }, {
      id: '002',
      description: 'Vijaya Designs',
      category: 'Multicolored Wear',
      price: '2090',
      image: 'themes/images/ladies/2.jpg'
    }, {
      id: '003',
      description: 'Bhandari Creations',
      category: 'Veruca Salt',
      price: '3070',
      image: 'themes/images/ladies/3.jpg'
    },{
      id: '004',
      description: 'Grand Old Mansion',
      category: 'Grey off shoulder top',
      price: '1839',
      image: 'themes/images/ladies/4.jpg'
    }, {
      id: '005',
      description: 'Vijaya Designs',
      category: 'Veruca Salt',
      price: '2039',
      image: 'themes/images/ladies/5.jpg'
    }, {
      id: '006',
      description: 'Bhandari Creations',
      category: 'Veruca Salt',
      price: '2500',
      image: 'themes/images/ladies/6.jpg'
    },{
      id: '007',
      description: 'Vijaya Designs',
      category: 'Veruca Salt',
      price: '2008',
      image: 'themes/images/ladies/7.jpg'
    }, {
      id: '008',
      description: 'Grand Old Mansion',
      category: 'Veruca Salt',
      price: '2065',
      image: 'themes/images/ladies/8.jpg'
    }, {
      id: '009',
      description: 'Bhandari Creations',
      category: 'Veruca Salt',
      price: '2032',
      image: 'themes/images/ladies/9.jpg'
    }]; 
  }
});
