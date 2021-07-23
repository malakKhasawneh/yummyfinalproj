import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPopMenuComponent } from './offers-pop-menu.component';

describe('OffersPopMenuComponent', () => {
  let component: OffersPopMenuComponent;
  let fixture: ComponentFixture<OffersPopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersPopMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersPopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
