import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPerlocationPage } from './alert-perlocation.page';

describe('AlertPerlocationPage', () => {
  let component: AlertPerlocationPage;
  let fixture: ComponentFixture<AlertPerlocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPerlocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPerlocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
