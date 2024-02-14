import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyComponent } from './turkey.component';

describe('TurkeyComponent', () => {
  let component: TurkeyComponent;
  let fixture: ComponentFixture<TurkeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurkeyComponent]
    });
    fixture = TestBed.createComponent(TurkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
