import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
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

  // it('selectedPage should be initially set from parent component', () => {
  //   const selectedPage = component.getSelectedPage();
  //   expect(selectedPage).toBeDefined();
  // });
});
