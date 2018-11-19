import {Product} from './product';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockProducts {

  PRODUCTS: Product[] = [
    {
      id: 1,
      basket: 1,
      name: '16lb Bag of Skittles',
      description: 'food product',
      price: 16.00,
      tax: false,
      importTax: false,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 2,
      basket: 1,
      name: 'Walkman',
      description: 'entertainment product',
      price: 99.99,
      tax: true,
      importTax: false,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 3,
      basket: 1,
      name: 'Bag of Microwave Popcorn',
      description: 'food product',
      price: 0.99,
      tax: false,
      importTax: false,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 4,
      basket: 2,
      name: 'bag of Vanilla-Hazelnut Coffee',
      description: 'food product',
      price: 11.00,
      tax: false,
      importTax: true,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 5,
      basket: 2,
      name: 'Vespa',
      description: 'vehicle',
      price: 15001.25,
      tax: true,
      importTax: true,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 6,
      basket: 3,
      name: 'crate of Almond Snickers',
      description: 'food product',
      price: 75.99,
      tax: false,
      importTax: true,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 7,
      basket: 3,
      name: 'Discman',
      description: 'entertainment product',
      price: 55.00,
      tax: true,
      importTax: false,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 8,
      basket: 3,
      name: 'Bottle of Wine',
      description: 'food product',
      price: 10.00,
      tax: true,
      importTax: true,
      imagePath: ' ',
      quantity: 1
    },
    {
      id: 9,
      basket: 3,
      name: '300# bag of Fair-Trade Coffee',
      description: 'food product',
      price: 997.99,
      tax: false,
      importTax: false,
      imagePath: ' ',
      quantity: 1
    }
  ];

  getMockProducts() {
    return this.PRODUCTS;
  }

}
