import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private currentTheme = new BehaviorSubject<boolean>(false);
  theme = this.currentTheme.asObservable();

  constructor() { }

  changeTheme(theme: boolean) {
    console.log('InfoService changeTheme()');
    this.currentTheme.next(theme);
  }

}
