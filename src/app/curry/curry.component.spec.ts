import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryComponent } from './curry.component';

describe('CurryComponent', () => {
  let component: CurryComponent;
  let fixture: ComponentFixture<CurryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurryComponent]
    });
    fixture = TestBed.createComponent(CurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
