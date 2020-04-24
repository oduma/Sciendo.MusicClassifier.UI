import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMembersListComponent } from './band-members-list.component';

describe('BandMembersListComponent', () => {
  let component: BandMembersListComponent;
  let fixture: ComponentFixture<BandMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandMembersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
