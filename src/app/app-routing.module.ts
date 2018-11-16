import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasketsComponent} from "./baskets/baskets.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ConfirmationComponent} from "./confirmation/confirmation.component";

const routes: Routes = [
  {path: '', component: BasketsComponent, pathMatch: 'full'},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
