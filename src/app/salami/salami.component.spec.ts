import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalamiComponent } from './salami.component';

describe('SalamiComponent', () => {
  let component: SalamiComponent;
  let fixture: ComponentFixture<SalamiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalamiComponent]
    });
    fixture = TestBed.createComponent(SalamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
