import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFormContainerComponent } from './insurance-form-container.component';

describe('InsuranceFormContainerComponent', () => {
  let component: InsuranceFormContainerComponent;
  let fixture: ComponentFixture<InsuranceFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
