import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesServicesSectionComponent } from './features-services-section.component';

describe('FeaturesServicesSectionComponent', () => {
  let component: FeaturesServicesSectionComponent;
  let fixture: ComponentFixture<FeaturesServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesServicesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
