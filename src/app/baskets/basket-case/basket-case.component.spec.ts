import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketCaseComponent} from './basket-case.component';

describe('BasketCaseComponent', () => {
  let component: BasketCaseComponent;
  let fixture: ComponentFixture<BasketCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
