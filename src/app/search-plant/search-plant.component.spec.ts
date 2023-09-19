import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlantComponent } from './search-plant.component';

describe('SearchPlantComponent', () => {
  let component: SearchPlantComponent;
  let fixture: ComponentFixture<SearchPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPlantComponent]
    });
    fixture = TestBed.createComponent(SearchPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
