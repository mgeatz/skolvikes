import {Component, OnInit} from '@angular/core';
import {InfoService} from '../info.service';
import {faBars, faClipboard, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  selectedPage: string;

  lightTheme: boolean;

  mobile: boolean;

  faShoppingCart = faShoppingCart;

  faBars = faBars;

  faClipboard = faClipboard;

  title = 'SKOL VIKES';

  pages = [
    'baskets',
    'checkout'
  ];

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    this.lightTheme = false;

    // monitor the selectedPage to toggle active state CSS
    this.info.page.subscribe(page => {
      this.selectedPage = page;
    });

    // make this an observable hooked to the resize event
    this.mobile = (window.innerWidth < 992);
  }

  changePage(page: string) {
    console.log('changePage() ', page);
    return this.info.setPage(page);
  }

}
