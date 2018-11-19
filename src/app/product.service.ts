import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': 'dWRchaZ0sS88OGNK0KyMb3F7SnS7niRy39NREhdK'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://mt4e5q55eh.execute-api.us-east-1.amazonaws.com/prod/products?TableName=Basket';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productUrl, httpOptions)
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
