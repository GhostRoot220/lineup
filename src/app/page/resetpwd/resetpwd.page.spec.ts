import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwdPage } from './resetpwd.page';

describe('ResetpwdPage', () => {
  let component: ResetpwdPage;
  let fixture: ComponentFixture<ResetpwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpwdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
