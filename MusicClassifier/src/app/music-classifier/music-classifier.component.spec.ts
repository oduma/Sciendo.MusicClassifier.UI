import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicClassifierComponent } from './music-classifier.component';

describe('MusicClassifierComponent', () => {
  let component: MusicClassifierComponent;
  let fixture: ComponentFixture<MusicClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
