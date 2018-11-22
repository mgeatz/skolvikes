import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  initialLocation = location.pathname.split('/')[1];

  private currentBasket = new BehaviorSubject<number>(1);
  basket = this.currentBasket.asObservable();

  private currentPage = new BehaviorSubject<string>(this.initialLocation);
  page = this.currentPage.asObservable();

  private currentKey = new BehaviorSubject<string>('');
  key = this.currentKey.asObservable();

  constructor() { }

  setBasket(basket: number) {
    console.log('InfoService.setBasket');
    return this.currentBasket.next(basket);
  }

  setPage(page: string) {
    console.log('InfoService.setPage');
    return this.currentPage.next(page);
  }

  configureKey() {
    const key = location.search.split('=')[1];

    if (key !== undefined) {
      this.setKey(key);
    }
  }

  setKey(key: string) {
    this.currentKey.next(key);
  }

}
