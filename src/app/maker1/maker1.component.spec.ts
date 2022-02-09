import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maker1Component } from './maker1.component';

describe('Maker1Component', () => {
  let component: Maker1Component;
  let fixture: ComponentFixture<Maker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maker1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
