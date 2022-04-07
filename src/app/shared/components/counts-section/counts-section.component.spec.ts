import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsSectionComponent } from './counts-section.component';

describe('CountsSectionComponent', () => {
  let component: CountsSectionComponent;
  let fixture: ComponentFixture<CountsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
