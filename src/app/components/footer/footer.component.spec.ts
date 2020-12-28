import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property called footer, it should be defined, it should be an object', () => {
    expect(component.footer).toBeDefined()
    expect(component.footer).toBeInstanceOf(Object)
  })

  it('should have a title equal to awi', ()=> {
    let compiled = fixture.nativeElement
    expect(compiled.querySelector('#footer-title').textContent).toContain('awi')
  })
});
