import {Component, OnInit} from '@angular/core';
import {BasketModel} from './basket.model';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.sass']
})
export class BasketsComponent implements OnInit {

  img = 'http://mgeatz.bandofworthiness.com/images/band_gray-12ef5d276124e2c27cd563a90dc7be86.jpg';

  imgSkittles = this.img;
  imgWalkman = this.img;
  imgPopcorn = this.img;

  currentBasket: number;

  baskets: BasketModel[] = [
    new BasketModel(1, '16lb Bag of Skittles', 'food product', 16.00, false, false, this.imgSkittles, 1),
    new BasketModel(1, 'Walkman', 'entertainment product', 99.99, true, false, this.imgWalkman, 1),
    new BasketModel(1, 'Bag of Microwave Popcorn', 'food product', 0.99, false, false, this.imgPopcorn, 1),

    new BasketModel(2, 'bag of Vanilla-Hazelnut Coffee', 'food product', 11.00, false, true, this.imgSkittles, 1),
    new BasketModel(2, 'Vespa', 'vehicle', 15001.25, true, true, this.imgWalkman, 1),

    new BasketModel(3, 'crate of Almond Snickers', 'food product', 75.99, false, true, this.imgSkittles, 1),
    new BasketModel(3, 'Discman', 'entertainment product', 55.00, true, false, this.imgWalkman, 1),
    new BasketModel(3, 'Bottle of Wine', 'food product', 10.00, true, true, this.imgPopcorn, 1),
    new BasketModel(3, '300# bag of Fair-Trade Coffee', 'food product', 997.99, false, false, this.imgPopcorn, 1)
  ];

  constructor(private info: InfoService) {
  }

  ngOnInit() {

    this.currentBasket = 1;

  }

  changeBasket(basket: number) {
    console.log('change basket number to', basket);
    this.currentBasket = basket;
    this.info.setBasket(basket);
  }


}
