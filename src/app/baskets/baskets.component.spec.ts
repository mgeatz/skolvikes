import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketsComponent} from './baskets.component';
import {Dependencies} from '../dependencies';

describe('BasketsComponent', () => {
  let component: BasketsComponent;
  let fixture: ComponentFixture<BasketsComponent>;

  beforeEach(async(() => {
    const dependencies = new Dependencies();
    dependencies.configure();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
