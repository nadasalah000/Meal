import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkComponent } from './pork.component';

describe('PorkComponent', () => {
  let component: PorkComponent;
  let fixture: ComponentFixture<PorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorkComponent]
    });
    fixture = TestBed.createComponent(PorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
