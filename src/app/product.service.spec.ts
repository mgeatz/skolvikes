import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {Dependencies} from './dependencies';


describe('ProductService', () => {
  beforeEach(() => {
    const dependencies = new Dependencies();
    dependencies.configure();
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
