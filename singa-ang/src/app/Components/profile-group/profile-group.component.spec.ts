import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGroupComponent } from './profile-group.component';

describe('ProfileGroupComponent', () => {
  let component: ProfileGroupComponent;
  let fixture: ComponentFixture<ProfileGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
