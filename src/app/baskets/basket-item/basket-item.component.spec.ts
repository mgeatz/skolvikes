import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketItemComponent} from './basket-item.component';
import {Dependencies} from '../../dependencies';

describe('BasketItemComponent', () => {
  let component: BasketItemComponent;
  let fixture: ComponentFixture<BasketItemComponent>;

  beforeEach(async(() => {
    const dependencies = new Dependencies();
    dependencies.configure();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
