import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoatComponent } from './goat.component';

describe('GoatComponent', () => {
  let component: GoatComponent;
  let fixture: ComponentFixture<GoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoatComponent]
    });
    fixture = TestBed.createComponent(GoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
