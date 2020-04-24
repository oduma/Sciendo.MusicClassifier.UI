import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandWikiInfoComponent } from './band-wiki-info.component';

describe('BandWikiInfoComponent', () => {
  let component: BandWikiInfoComponent;
  let fixture: ComponentFixture<BandWikiInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandWikiInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandWikiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
