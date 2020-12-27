import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeaderComponent } from './landing-header.component';

describe('LandingHeaderComponent', () => {
  let component: LandingHeaderComponent;
  let fixture: ComponentFixture<LandingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title equal to AWI', ()=> {
    expect(component.title).toEqual('AWI')
  })

  it('should have a message that contains summerians', () => {
    let message = component.message
    expect(message).toContain('listen to the voice of your mother')
  })

  it('should have a list of links that contain the following link', ()=> {
    expect(component.links).toContain({link: 'home', text: 'home', icon: 'home'})
  })
});
