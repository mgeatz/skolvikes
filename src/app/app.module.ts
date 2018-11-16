import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {BasketCaseComponent} from './basket-case/basket-case.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './basket-item/basket-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BasketsComponent,
    BasketCaseComponent,
    CheckoutComponent,
    ConfirmationComponent,
    HeaderComponent,
    BasketItemComponent
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
