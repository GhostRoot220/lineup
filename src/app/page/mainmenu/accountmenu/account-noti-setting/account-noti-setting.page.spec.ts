import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotiSettingPage } from './account-noti-setting.page';

describe('AccountNotiSettingPage', () => {
  let component: AccountNotiSettingPage;
  let fixture: ComponentFixture<AccountNotiSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNotiSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotiSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
