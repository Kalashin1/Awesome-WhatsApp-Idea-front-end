import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of links that contain the following link', ()=> {
    expect(component.links).toContain({link: 'home', text: 'home', icon: 'home'})
  })

  it('should have a title and render it', () => {
    expect(component.title).toBeDefined()
    expect(component.title).toContain('login')
    expect(fixture.nativeElement.querySelector('.form-title').textContent).toContain('Please login')
  })
});
