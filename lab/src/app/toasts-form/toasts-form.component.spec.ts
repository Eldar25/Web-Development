import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsFormComponent } from './toasts-form.component';

describe('ToastsFormComponent', () => {
  let component: ToastsFormComponent;
  let fixture: ComponentFixture<ToastsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
