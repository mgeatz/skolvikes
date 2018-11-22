import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AwsAPIInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepting req');

    const clone = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'x-api-key': 'dWRchaZ0sS88OGNK0KyMb3F7SnS7niRy39NREhdK'
      }
    });
    return next.handle(clone);
  }

}
