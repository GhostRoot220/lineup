import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportitemsPage } from './reportitems.page';

describe('ReportitemsPage', () => {
  let component: ReportitemsPage;
  let fixture: ComponentFixture<ReportitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportitemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
