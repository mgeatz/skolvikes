import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('return value should be opposite of the passed boolean', () => {
    expect(component.changeTheme(true)).toBe(false);
  });

  it('selectedPage should be initially set from parent component', () => {
    setTimeout(() => {
      const selectedPage = component.getSelectedPage();
      console.log('SELECTED PAGE ************* ', selectedPage);
      expect(selectedPage).toBeDefined();
    }, 500);
  });

});
