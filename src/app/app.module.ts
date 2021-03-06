import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';
import {FormsModule} from '@angular/forms';
import {InfoService} from './info.service';
import {TaxService} from './tax.service';
import {ProductService} from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    BasketsComponent,
    CheckoutComponent,
    HeaderComponent,
    BasketItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    InfoService,
    TaxService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
