import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefComponent } from './beef.component';

describe('BeefComponent', () => {
  let component: BeefComponent;
  let fixture: ComponentFixture<BeefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeefComponent]
    });
    fixture = TestBed.createComponent(BeefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
