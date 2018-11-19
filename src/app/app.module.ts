import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasketsComponent} from './baskets/baskets.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HeaderComponent} from './header/header.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';
import {FormsModule} from '@angular/forms';
import {InfoService} from './info.service';
import {TaxService} from './tax.service';
import {ProductService} from './product.service';
import {MockProducts} from './mock-products';


@NgModule({
  declarations: [
    AppComponent,
    BasketsComponent,
    CheckoutComponent,
    ConfirmationComponent,
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
    ProductService,
    MockProducts
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
