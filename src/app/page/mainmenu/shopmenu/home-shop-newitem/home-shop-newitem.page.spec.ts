import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShopNewitemPage } from './home-shop-newitem.page';

describe('HomeShopNewitemPage', () => {
  let component: HomeShopNewitemPage;
  let fixture: ComponentFixture<HomeShopNewitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShopNewitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShopNewitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
