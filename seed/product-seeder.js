var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping-cart');

var products = [
    new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0423/4585/products/BIGFACEVERSACEBLACK_1024x1024@2x.jpg?v=1413088694',
    title: 'Versace Shirt',
    description: 'Awesome game',
    price: 350
               }),
    new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/0423/4585/products/BIGFACEVERSACEBLACK_1024x1024@2x.jpg?v=1413088694',
    title: 'Gucci Shirt',
    description: 'Migos inspired',
    price: 300
                 })


];

for(var i = 0; i < products.length; i++){
    products[i].save();
}