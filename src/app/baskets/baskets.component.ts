import {Component, OnInit} from '@angular/core';
import {BasketModel} from './basket.model';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.sass']
})
export class BasketsComponent implements OnInit {

  imgSkittles = 'assets/skittles.jpg';
  imgWalkman = '../assets/Walkman.jpg';
  imgPopcorn = '../../../assets/microwave-popcorn.jpg';

  baskets: BasketModel[] = [
    new BasketModel('16lb Bag of Skittles', 'food product', 16.00, false, false, this.imgSkittles, 1),
    new BasketModel('Walkman', 'entertainment product', 99.99, true, false, this.imgWalkman, 1),
    new BasketModel('Bag of Microwave Popcorn', 'food product', 0.99, false, false, this.imgPopcorn, 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
