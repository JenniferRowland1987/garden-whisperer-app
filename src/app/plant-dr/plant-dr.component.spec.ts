import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDrComponent } from './plant-dr.component';

describe('PlantDrComponent', () => {
  let component: PlantDrComponent;
  let fixture: ComponentFixture<PlantDrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantDrComponent]
    });
    fixture = TestBed.createComponent(PlantDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
