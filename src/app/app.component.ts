import {Component, OnInit} from '@angular/core';
import {InfoService} from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private infoService: InfoService) {
  }

  ngOnInit() {
    this.infoService.configureKey();
  }

}
