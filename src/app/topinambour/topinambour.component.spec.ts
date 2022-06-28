import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopinambourComponent } from './topinambour.component';

describe('TopinambourComponent', () => {
  let component: TopinambourComponent;
  let fixture: ComponentFixture<TopinambourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopinambourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopinambourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
