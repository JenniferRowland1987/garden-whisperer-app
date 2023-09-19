import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestDetailsComponent } from './pest-details.component';

describe('PestDetailsComponent', () => {
  let component: PestDetailsComponent;
  let fixture: ComponentFixture<PestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestDetailsComponent]
    });
    fixture = TestBed.createComponent(PestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
