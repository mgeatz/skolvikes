import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private currentTheme = new BehaviorSubject<boolean>(false);
  theme = this.currentTheme.asObservable();

  private currentBasket = new BehaviorSubject<number>(1);
  basket = this.currentBasket.asObservable();

  constructor() { }

  setBasket(basket: number) {
    console.log('InfoService.changeBasket');
    return this.currentBasket.next(basket);
  }

  setTheme(theme: boolean) {
    console.log('InfoService.changeTheme');
    return this.currentTheme.next(theme);
  }

}
