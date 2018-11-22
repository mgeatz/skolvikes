import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {InfoService} from './info.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productUrl = 'https://mt4e5q55eh.execute-api.us-east-1.amazonaws.com/prod/products';  // URL to web api

  constructor(private http: HttpClient, private infoService: InfoService) {
  }


  getProducts(key: string) {

    if (key === undefined) {
      this.infoService.key.subscribe(_key => {
        key = _key;
      });
    }

    return this.http.get(this.productUrl, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key
      },
      params: new HttpParams().set('TableName', 'Basket')
    });
  }

}
