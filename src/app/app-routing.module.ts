import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasketsComponent} from './baskets/baskets.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  {path: '', component: BasketsComponent, pathMatch: 'full'},
  {path: 'baskets', component: BasketsComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
