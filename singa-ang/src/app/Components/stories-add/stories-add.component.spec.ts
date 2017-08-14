import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAddComponent } from './stories-add.component';

describe('StoriesAddComponent', () => {
  let component: StoriesAddComponent;
  let fixture: ComponentFixture<StoriesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
