import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExplorePage } from './home-explore.page';

describe('HomeExplorePage', () => {
  let component: HomeExplorePage;
  let fixture: ComponentFixture<HomeExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExplorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
