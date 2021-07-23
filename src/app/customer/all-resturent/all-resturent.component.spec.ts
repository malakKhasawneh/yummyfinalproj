import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResturentComponent } from './all-resturent.component';

describe('AllResturentComponent', () => {
  let component: AllResturentComponent;
  let fixture: ComponentFixture<AllResturentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResturentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResturentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
