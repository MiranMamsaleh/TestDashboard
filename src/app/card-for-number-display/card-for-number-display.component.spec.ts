import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForNumberDisplayComponent } from './card-for-number-display.component';

describe('CardForNumberDisplayComponent', () => {
  let component: CardForNumberDisplayComponent;
  let fixture: ComponentFixture<CardForNumberDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForNumberDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForNumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
