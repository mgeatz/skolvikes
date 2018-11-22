import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Product} from './product';


describe('ProductService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ProductService]
  }));
});

it('should list the products', () => {
  const productService = TestBed.get(ProductService);
  const http = TestBed.get(HttpTestingController);
  const url = 'https://mt4e5q55eh.execute-api.us-east-1.amazonaws.com/prod/products';

  // fake response
  const expectedProducts = [{
    id: 1,
    basket: 1,
    name: '16lb Bag of Skittles',
    description: 'food product',
    price: 16,
    tax: false,
    importTax: false,
    imagePath: 'assets/skittles.jpeg',
    quantity: 1
  }];

  let actualProducts = [];

  productService.getProducts('DyKIhNfvpy1J7JiCbgacH20NXbT0ccfy6HPsPUBm').subscribe((products: Array<Product>) => {
    actualProducts = products;
  });

  http.expectOne(url).flush(expectedProducts);

  expect(actualProducts).toEqual(expectedProducts);
});
