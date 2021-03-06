import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsComponent } from './choose-us.component';

describe('ChooseUsComponent', () => {
  let component: ChooseUsComponent;
  let fixture: ComponentFixture<ChooseUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an content property which is an object', ()=> {
    expect(component.content).toBeInstanceOf(Object)
    expect(component.content.title).toEqual('Pick us because')
    expect(component.content.pullFirstCol).toBeTrue()
  })
});
