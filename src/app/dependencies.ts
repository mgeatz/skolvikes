import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {BasketCaseComponent} from './baskets/basket-case/basket-case.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';
import {BasketDetailsComponent} from './baskets/basket-details/basket-details.component';
import {ItemComponent} from './item/item.component';

export class Dependencies {

  private configureDependencies() {
    return TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        BasketsComponent,
        BasketCaseComponent,
        CheckoutComponent,
        ConfirmationComponent,
        HeaderComponent,
        BasketItemComponent,
        BasketDetailsComponent,
        ItemComponent
      ],
    }).compileComponents();
  }

  constructor() {

  }

  public configure() {
    return this.configureDependencies();
  }

}


