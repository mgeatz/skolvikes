import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {Dependencies} from '../dependencies';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    const dependencies = new Dependencies();
    dependencies.configure();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectedPage should be initially set from parent component', () => {
    console.log('SELECTED PAGE ************* ');
    // expect(component.getSelectedPage).toHaveBeenCalled();
  });


});
