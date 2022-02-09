import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maker2Component } from './maker2.component';

describe('Maker2Component', () => {
  let component: Maker2Component;
  let fixture: ComponentFixture<Maker2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maker2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
