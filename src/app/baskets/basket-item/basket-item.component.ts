import {Component, Input, OnInit} from '@angular/core';
import {InfoService} from '../../info.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.sass']
})
export class BasketItemComponent implements OnInit {

  @Input() baskets: object;

  currentBasket: number;

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    console.log('BasketItemComponent');

    this.info.basket.subscribe(basket => {
      this.currentBasket = basket;
    });

  }

  getBasket() {
    console.log('BasketItemComponent.getBasket');
    return this.info.basket;
  }

}
