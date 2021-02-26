import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionCreatePage } from './discussion-create.page';

describe('DiscussionCreatePage', () => {
  let component: DiscussionCreatePage;
  let fixture: ComponentFixture<DiscussionCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
