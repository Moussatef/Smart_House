import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsSectionComponent } from './our-clients-section.component';

describe('OurClientsSectionComponent', () => {
  let component: OurClientsSectionComponent;
  let fixture: ComponentFixture<OurClientsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurClientsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
