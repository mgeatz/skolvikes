import {AfterContentInit, Component} from '@angular/core';
import {InfoService} from '../info.service';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.sass']
})
export class BasketsComponent implements AfterContentInit {

  currentBasket: number;

  items: Product[];

  hasKey: boolean;

  constructor(private infoService: InfoService, private productService: ProductService) {
  }

  ngAfterContentInit() {
    this.getProducts();

    // ensure user start browsing this
    // route at the top of the page
    scrollTo(0, 0);

    this.currentBasket = 1;

    // monitor which basket is currently selected for checkout
    this.infoService.key.subscribe(key => {
      this.hasKey = key;
    });


  }

  changeBasket(basket: number) {
    console.log('change basket number to', basket);
    this.currentBasket = basket;
    this.infoService.setBasket(basket);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(data => {
      // debugger;
      this.items = data.Items;
    });
  }

}
