import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentCardsComponent } from './resturent-cards.component';

describe('ResturentCardsComponent', () => {
  let component: ResturentCardsComponent;
  let fixture: ComponentFixture<ResturentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturentCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
