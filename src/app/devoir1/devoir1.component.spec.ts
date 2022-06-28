import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devoir1Component } from './devoir1.component';

describe('Devoir1Component', () => {
  let component: Devoir1Component;
  let fixture: ComponentFixture<Devoir1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Devoir1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devoir1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
