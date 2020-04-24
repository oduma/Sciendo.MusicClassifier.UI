import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPickerComponent } from './set-picker.component';

describe('SetPickerComponent', () => {
  let component: SetPickerComponent;
  let fixture: ComponentFixture<SetPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
