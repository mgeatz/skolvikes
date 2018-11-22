import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';

export class Dependencies {

  private configureDependencies() {
    return TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        BasketsComponent,
        CheckoutComponent,
        HeaderComponent,
        BasketItemComponent
      ]
    }).compileComponents();
  }

  constructor() {

  }

  public configure() {
    return this.configureDependencies();
  }

}


