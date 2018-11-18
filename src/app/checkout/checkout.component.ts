import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // ensure user start browsing this
    // route at the top of the page
    scrollTo(0, 0);

  }

}
