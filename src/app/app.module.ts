import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {BasketCaseComponent} from './baskets/basket-case/basket-case.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';
import {FormsModule} from '@angular/forms';
import {BasketDetailsComponent} from './baskets/basket-details/basket-details.component';
import {ItemComponent} from './item/item.component';

@NgModule({
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
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
