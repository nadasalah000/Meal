import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperoniComponent } from './pepperoni.component';

describe('PepperoniComponent', () => {
  let component: PepperoniComponent;
  let fixture: ComponentFixture<PepperoniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PepperoniComponent]
    });
    fixture = TestBed.createComponent(PepperoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
