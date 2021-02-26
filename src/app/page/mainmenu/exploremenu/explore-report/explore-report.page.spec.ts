import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreReportPage } from './explore-report.page';

describe('ExploreReportPage', () => {
  let component: ExploreReportPage;
  let fixture: ComponentFixture<ExploreReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
