import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivaceModalComponent } from './divace-modal.component';

describe('DivaceModalComponent', () => {
  let component: DivaceModalComponent;
  let fixture: ComponentFixture<DivaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
