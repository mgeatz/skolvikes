import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() selectedPage: string;

  @Output() pageChangeEvent = new EventEmitter<string>();

  title = 'SKOL VIKES';

  lightTheme: boolean;

  pages = [
    'baskets',
    'checkout',
    'confirmation'
  ];

  constructor(private info: InfoService) {
  }

  ngOnInit() {

    this.lightTheme = false;

  }

  changeTheme(lightTheme) {
    this.lightTheme = !lightTheme;
    this.info.changeTheme(this.lightTheme);
    return this.lightTheme;
  }

  getSelectedPage() {
    return this.selectedPage;
  }

  goTo(page) {

    console.log('page ', page);

    this.selectedPage = page;

    this.pageChangeEvent.emit(this.selectedPage);
  }


}
