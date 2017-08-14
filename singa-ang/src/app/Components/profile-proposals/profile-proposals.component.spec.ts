import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProposalsComponent } from './profile-proposals.component';

describe('ProfileProposalsComponent', () => {
  let component: ProfileProposalsComponent;
  let fixture: ComponentFixture<ProfileProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
