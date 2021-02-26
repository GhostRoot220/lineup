import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidelistPage } from './hidelist.page';

describe('HidelistPage', () => {
  let component: HidelistPage;
  let fixture: ComponentFixture<HidelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
