import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamComponent } from './ham.component';

describe('HamComponent', () => {
  let component: HamComponent;
  let fixture: ComponentFixture<HamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamComponent]
    });
    fixture = TestBed.createComponent(HamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
