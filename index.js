const faker = require('faker');
const _ = require('lodash');

module.exports = function data() {
  return {
    categories: _.times(6, () => ({
      image: faker.random.image(),
      title: faker.lorem.sentence(),
      id: faker.random.uuid(),
    })),
    products: _.times(100, () => ({
      id: faker.random.uuid(),
      images: [
        faker.random.image(),
        faker.random.image(),
        faker.random.image(),
        faker.random.image(),
        faker.random.image(),
      ],
      'category-id': faker.random.uuid(),
      price: faker.commerce.price(),
      name: faker.commerce.productName(),
    })),
  };
};
