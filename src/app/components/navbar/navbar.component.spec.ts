import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Link } from '../../interface/link'
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }) 

  it('should have a property called hidden and equal to false initially', () => {
    expect(component.hidden).toEqual({hidden: false})
  })

  it('it should have a method called showLink and it should negate the value of hidden', () => {
    component.showLinks()
    expect(component.hidden.hidden).toBeTrue()
    component.showLinks()
    expect(component.hidden.hidden ).toBeFalse()
  })
});
