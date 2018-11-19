import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {InfoService} from './info.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productUrl = 'https://mt4e5q55eh.execute-api.us-east-1.amazonaws.com/prod/products?TableName=Basket';  // URL to web api

  constructor(private http: HttpClient, private infoService: InfoService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.infoService.getKey()
    })
  };

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productUrl, this.httpOptions)
      .pipe(
        tap( // Log the result or error
          data => {
            console.log('success : ', data.Items);
            return data.Items;
          },
          error => {
            console.error('error : ', error);
          }
        )
      );
  }

}
