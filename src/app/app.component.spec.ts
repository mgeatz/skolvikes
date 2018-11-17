import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {BasketsComponent} from './baskets/baskets.component';
import {BasketCaseComponent} from './baskets/basket-case/basket-case.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {BasketItemComponent} from './baskets/basket-item/basket-item.component';
import {BasketDetailsComponent} from './baskets/basket-details/basket-details.component';
import {ItemComponent} from './item/item.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule
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
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'skolvikes'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('skolvikes');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to skolvikes!');
  // });
});
