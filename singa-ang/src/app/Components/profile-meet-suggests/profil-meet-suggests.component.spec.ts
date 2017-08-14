import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMeetSuggestsComponent } from './profil-meet-suggests.component';

describe('ProfilMeetSuggestsComponent', () => {
  let component: ProfilMeetSuggestsComponent;
  let fixture: ComponentFixture<ProfilMeetSuggestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilMeetSuggestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilMeetSuggestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
