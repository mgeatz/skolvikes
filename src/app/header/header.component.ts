import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InfoService} from '../info.service';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() selectedPage: string;

  @Output() pageChangeEvent = new EventEmitter<string>();

  title = 'SKOL VIKES';

  faShoppingCart = faShoppingCart;

  lightTheme: boolean;

  pages = [
    'baskets',
    'checkout'
  ];

  constructor(private info: InfoService) {
  }


  ngOnInit() {
    this.lightTheme = false;
  }

  changeTheme(lightTheme) {
    this.lightTheme = !lightTheme;
    this.info.setTheme(this.lightTheme);
    return this.lightTheme;
  }

  public getSelectedPage() {
    return this.selectedPage;
  }

  goTo(page) {
    console.log('page ', page);
    this.selectedPage = page;
    this.pageChangeEvent.emit(this.selectedPage);
  }

}
