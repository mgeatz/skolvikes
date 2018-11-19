import {Component, Input, OnInit} from '@angular/core';
import {InfoService} from '../../info.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.sass']
})
export class BasketItemComponent implements OnInit {

  @Input() items;

  currentBasket: number;

  constructor(private infoService: InfoService) {
  }

  ngOnInit() {
    console.log('BasketItemComponent');

    // monitor which basket is currently selected for checkout
    this.infoService.basket.subscribe(basket => {
      this.currentBasket = basket;
    });

    // this.basketItems = this.products.Items;
  }

  changePage(page: string) {
    console.log('changePage() ', page);
    this.infoService.setPage(page);
  }

}
